import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { jwtDecode } from "jwt-decode";

import { setAuthToken, refreshAuthentication, findUserByUsername } from '../services/dfl-server';

import AsyncStorage from '@react-native-async-storage/async-storage';
export const APP_TAG = '@DFL:';

export const AuthContext = createContext({});

const getUsername = (token) => {
  const { username } = jwtDecode(token);
  return username;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [user, setUser] = useState(null);
  const [refreshInterval, setRefreshInterval] = useState(null);

  useEffect(() => {
    async function loadStorageData() {
      try {
        setLoading(true);
        const storageAccessToken = await AsyncStorage.getItem(APP_TAG + 'accessToken');
        const storagedRefreshToken = await AsyncStorage.getItem(APP_TAG + 'refreshToken');

        if (storageAccessToken && storagedRefreshToken) {
          setAccessToken(storageAccessToken);
          setRefreshToken(storagedRefreshToken);
          setAuthToken(storageAccessToken);

          const user = await findUserByUsername(getUsername(loginResponse.accessToken));
          setUser(user);

          setIsAuthenticated(true);
        } else {
          throw new Error('Cant access AsyncStorage');
        }
      } catch (err) {
        setAccessToken("");
        setRefreshToken("");
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  useEffect(() => {
    const setAccessTokenInStorage = async (accessToken) => {
      await AsyncStorage.setItem(APP_TAG + 'accessToken', accessToken);
    }

    setAccessTokenInStorage(accessToken);
  }, [accessToken])

  useEffect(() => {
    const setRefreshTokenInStorage = async (refreshToken) => {
      await AsyncStorage.setItem(APP_TAG + 'refreshToken', refreshToken);
    }

    setRefreshTokenInStorage(refreshToken);
  }, [refreshToken])

  useEffect(() => {
    setAuthToken(accessToken);
  }, [accessToken]);

  const handleLogin = useCallback(async (loginResponse) => {
    try {
      
      setAuthToken(loginResponse.accessToken);

      const user = await findUserByUsername(getUsername(loginResponse.accessToken));
      setUser(user);

      setAccessToken(loginResponse.accessToken);
      setRefreshToken(loginResponse.refreshToken);
      
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Error storing the auth token', err);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      setAccessToken("");
      setRefreshToken("");

      setIsAuthenticated(false);
      setUser(null);
    } catch (err) {
      console.error('Error clearing the storage', err);
    }
  }, []);

  const handleRefreshToken = useCallback(async () => {
    try {
      const refreshResponse = await refreshAuthentication(refreshToken);
      setAccessToken(refreshResponse.accessToken);
      setRefreshToken(refreshResponse.refreshToken);
    } catch (err) {
      console.error('Error refreshing the token', err);
      setAccessToken("");
      setRefreshToken("");

      setUser(null);
      setIsAuthenticated(false);
    }
  }, [refreshToken]);

  useEffect(() => {
    if (refreshInterval) {
      clearInterval(refreshInterval);
    }

    if (isAuthenticated) {
      const interval = setInterval(handleRefreshToken, 60 * 10 * 1000);
      setRefreshInterval(interval);
    } else if (refreshInterval) {
      clearInterval(refreshInterval);
    }

    return () => {
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
    };
  }, [isAuthenticated, handleRefreshToken]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, handleLogin, handleLogout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
