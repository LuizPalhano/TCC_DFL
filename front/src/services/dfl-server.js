import axios from 'axios';

const dflApi = axios.create({
  baseURL: 'https://dfl-j3vo.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export function setAuthToken(token) {
  if (token) {
    dflApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete dflApi.defaults.headers.common['Authorization'];
  }
}

export async function listTopics() {
  const { data } = await dflApi.get('topic');
  return data;
}

export async function findUserByUsername(username) {
  const { data } = await dflApi.get(`user/${username}`);
  return data;
}

export async function getUserPreferences(username, category) {
  try {
    const { data } = await dflApi.get(`user/${username}`);
    const categoryData = data.preferences.find(pref => pref.name === category);
    if (categoryData && categoryData.pares) {
      console.log('Pares encontrados:', categoryData.pares); // Log detalhado dos pares
      return categoryData.pares;
    } else {
      console.log('Detalhe dos dados recebidos:', JSON.stringify(data.preferences)); // Log detalhado para depuração
      throw new Error('Categoria não encontrada nas preferências do usuário ou pares não definidos');
    }
  } catch (error) {
    console.error('Erro ao buscar preferências do usuário:', error);
    throw error;
  }
}



export async function updateTopic(name, newTopicData) {
  try {
    const { data } = await dflApi.put(`topic/${name}`, newTopicData);
    return data;
  } catch (error) {
    console.error('Erro ao atualizar tópico:', error);
    throw error;
  }
}

export async function findAllUsers() {
  const { data } = await dflApi.get('user');
  return data;
}


export const fetchExistingPairs = async (categoryName) => {
  try {
      const response = await fetch(`https://yourapi.com/categories/${categoryName}/pairs`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              // Inclua cabeçalhos de autenticação se necessário
          },
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.pairs; // Ajuste de acordo com a estrutura da resposta esperada
  } catch (error) {
      console.error('Failed to fetch existing pairs:', error);
      throw error; // Propague o erro para tratá-lo onde a função é chamada
  }
}


export async function updateUserProfile(username, email) {
  await dflApi.put('user/profile', { username, email });
}

export async function updateUserPassword(oldPassword, newPassword) {
  await dflApi.put('user/password', { oldPassword, newPassword });
}

export async function updateUserPreferences(preferences) {
  await dflApi.put('user/preference', { preferences });
}

export async function createUser(username, email, password) {
  const { data } = await dflApi.post('user', { username, email, password });
  return data;
}

export async function login(username, password) {
  const { data } = await dflApi.post('auth', { username, password });
  return data;
}

export async function refreshAuthentication(refreshToken) {
  const { data } = await dflApi.post('auth', { refreshToken });
  return data;
}

export async function forgotPasswordStart(email) {
  const { data } = await dflApi.post('recover/start', {email});
  return data;
}

export async function forgotPasswordEnd(email, recoverCode, password) {
  const { data } = await dflApi.post('recover/finish', {email, recoverCode, password});
  return data;
}

export async function getToken(username, password) {
  try {
    const response = await dflApi.post('auth', { username, password });
    return response.data.accessToken;
  } catch (error) {
    console.error('Erro ao obter o token:', error);
    return null;
  }
}

export async function saveRankedTopics(payload) {
  try {
    const response = await dflApi.put('user/preference/topic', payload);
    if (response.status === 200 || response.status === 204) {
      return 'Sucesso';
    } else {
      throw new Error(`Erro ao salvar preferências: Status ${response.status}`);
    }
  } catch (error) {
    console.error('Erro ao salvar preferências:', error);
    throw error;
  }
}
