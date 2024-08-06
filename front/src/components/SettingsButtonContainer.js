import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, Color, FontSize } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SettingsButtonContainer = ({
  menuOptionText,
  buttonText,
  actionButtonText,
  showSave,
  propLeft,
  propLeft1,
  propFontFamily,
  propFontStyle,
  onCancelPress,
  onSavePress,
}) => {
  const settingsStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const saveStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const save1Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("fontStyle", propFontStyle),
    };
  }, [propFontFamily, propFontStyle]);

  return (
    <View style={[styles.buttonButton, styles.buttonPosition]}>
      <View style={[styles.separator, styles.buttonPosition]} />
      <Text style={[styles.settings, styles.cancel1Typo, settingsStyle]}>
        {menuOptionText}
      </Text>
      <Pressable
        style={[styles.cancel, styles.savePosition]}
        onPress={onCancelPress}
      >
        <Text style={[styles.cancel1, styles.save1Clr]}>{buttonText}</Text>
      </Pressable>
      <Pressable
        style={[styles.save, styles.savePosition, saveStyle]}
        onPress={onSavePress}
      >
        {showSave && (
          <Text style={[styles.save1, styles.save1Clr, save1Style]}>
            {actionButtonText}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  cancel1Typo: {
    fontFamily: FontFamily.asapMedium,
    fontWeight: "500",
  },
  savePosition: {
    top: "29.55%",
    position: "absolute",
  },
  save1Clr: {
    color: Color.primary,
    letterSpacing: -0.3,
    fontSize: FontSize.size_mid,
  },
  separator: {
    height: "2.27%",
    top: "97.73%",
    bottom: "0%",
    backgroundColor: Color.black,
    opacity: 0.1,
  },
  settings: {
    left: "42.4%",
    color: Color.black,
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_mid,
    fontWeight: "500",
    top: "29.55%",
    position: "absolute",
  },
  cancel1: {
    textAlign: "left",
    fontFamily: FontFamily.asapMedium,
    fontWeight: "500",
  },
  cancel: {
    left: "4.27%",
  },
  save1: {
    fontFamily: FontFamily.asapRegular,
    textAlign: "right",
  },
  save: {
    left: "86.93%",
  },
  buttonButton: {
    height: "5.42%",
    top: "5.42%",
    bottom: "89.16%",
    backgroundColor: Color.colorWhite,
  },
});

export default SettingsButtonContainer;
