import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Icon2Icons = ({
  firstRightIcon,
  title,
  showSeparator,
  showIconsSettings,
  icon2IconsPosition,
  icon2IconsTop,
  icon2IconsLeft,
  icon2IconsWidth,
  doneTop,
  doneLeft,
  secondRightIconOverflow,
  secondRightIconMaxHeight,
  firstRightIconPosition,
  firstRightIconHeight,
  firstRightIconWidth,
  firstRightIconTop,
  firstRightIconRight,
  firstRightIconBottom,
  firstRightIconLeft,
  titleTop,
  titleLeft,
  titleFontSize,
  titleLetterSpacing,
  titleFontWeight,
  titleFontFamily,
  titleColor,
  titleTextAlign,
  titleHeight,
  titleWidth,
  titleRight,
  titleBottom,
  titleOverflow,
  titleMaxHeight,
  iconsSettingsHeight,
  iconsSettingsWidth,
  iconsSettingsTop,
  iconsSettingsRight,
  iconsSettingsBottom,
  iconsSettingsLeft,
  iconsSettingsOverflow,
  iconsSettingsMaxHeight,
  onSecondRightIconPress,
}) => {
  const icon2IconsStyle = useMemo(() => {
    return {
      ...getStyleValue("position", icon2IconsPosition),
      ...getStyleValue("top", icon2IconsTop),
      ...getStyleValue("left", icon2IconsLeft),
      ...getStyleValue("width", icon2IconsWidth),
    };
  }, [icon2IconsPosition, icon2IconsTop, icon2IconsLeft, icon2IconsWidth]);

  const doneStyle = useMemo(() => {
    return {
      ...getStyleValue("top", doneTop),
      ...getStyleValue("left", doneLeft),
    };
  }, [doneTop, doneLeft]);

  const secondRightIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", secondRightIconOverflow),
      ...getStyleValue("maxHeight", secondRightIconMaxHeight),
    };
  }, [secondRightIconOverflow, secondRightIconMaxHeight]);

  const firstRightIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", firstRightIconPosition),
      ...getStyleValue("height", firstRightIconHeight),
      ...getStyleValue("width", firstRightIconWidth),
      ...getStyleValue("top", firstRightIconTop),
      ...getStyleValue("right", firstRightIconRight),
      ...getStyleValue("bottom", firstRightIconBottom),
      ...getStyleValue("left", firstRightIconLeft),
    };
  }, [
    firstRightIconPosition,
    firstRightIconHeight,
    firstRightIconWidth,
    firstRightIconTop,
    firstRightIconRight,
    firstRightIconBottom,
    firstRightIconLeft,
  ]);

  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("top", titleTop),
      ...getStyleValue("left", titleLeft),
      ...getStyleValue("fontSize", titleFontSize),
      ...getStyleValue("letterSpacing", titleLetterSpacing),
      ...getStyleValue("fontWeight", titleFontWeight),
      ...getStyleValue("fontFamily", titleFontFamily),
      ...getStyleValue("color", titleColor),
      ...getStyleValue("textAlign", titleTextAlign),
      ...getStyleValue("height", titleHeight),
      ...getStyleValue("width", titleWidth),
      ...getStyleValue("right", titleRight),
      ...getStyleValue("bottom", titleBottom),
      ...getStyleValue("overflow", titleOverflow),
      ...getStyleValue("maxHeight", titleMaxHeight),
    };
  }, [
    titleTop,
    titleLeft,
    titleFontSize,
    titleLetterSpacing,
    titleFontWeight,
    titleFontFamily,
    titleColor,
    titleTextAlign,
    titleHeight,
    titleWidth,
    titleRight,
    titleBottom,
    titleOverflow,
    titleMaxHeight,
  ]);

  const iconsSettingsStyle = useMemo(() => {
    return {
      ...getStyleValue("height", iconsSettingsHeight),
      ...getStyleValue("width", iconsSettingsWidth),
      ...getStyleValue("top", iconsSettingsTop),
      ...getStyleValue("right", iconsSettingsRight),
      ...getStyleValue("bottom", iconsSettingsBottom),
      ...getStyleValue("left", iconsSettingsLeft),
      ...getStyleValue("overflow", iconsSettingsOverflow),
      ...getStyleValue("maxHeight", iconsSettingsMaxHeight),
    };
  }, [
    iconsSettingsHeight,
    iconsSettingsWidth,
    iconsSettingsTop,
    iconsSettingsRight,
    iconsSettingsBottom,
    iconsSettingsLeft,
    iconsSettingsOverflow,
    iconsSettingsMaxHeight,
  ]);

  return (
    <View style={[styles.icon2Icons, icon2IconsStyle]}>
      {showSeparator && <View style={styles.separator} />}
      <Text style={[styles.done, styles.donePosition, doneStyle]}>Done</Text>
      <Image
        style={[
          styles.secondRightIcon,
          styles.rightIconLayout,
          secondRightIconStyle,
        ]}
        contentFit="cover"
        source={require("../../assets/second-right-icon1.png")}
        onPress={onSecondRightIconPress}
      />
      <Image
        style={[
          styles.firstRightIcon,
          styles.rightIconLayout,
          firstRightIconStyle,
        ]}
        contentFit="cover"
        source={firstRightIcon}
      />
      <Text style={[styles.title, styles.donePosition, titleStyle]}>
        {title}
      </Text>
      {showIconsSettings && (
        <Image
          style={[
            styles.iconsSettings,
            styles.rightIconLayout,
            iconsSettingsStyle,
          ]}
          contentFit="cover"
          source={require("../../assets/icons--settings1.png")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  donePosition: {
    letterSpacing: -0.3,
    fontSize: FontSize.size_mid,
    top: "27.27%",
    position: "absolute",
  },
  rightIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "22.73%",
    top: "22.73%",
    width: "6.4%",
    height: "54.55%",
    position: "absolute",
  },
  separator: {
    height: "2.27%",
    width: "100%",
    top: "97.73%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.black,
    opacity: 0.1,
    position: "absolute",
  },
  done: {
    left: "84.8%",
    fontStyle: "italic",
    fontFamily: FontFamily.asapItalic,
    color: Color.primary,
    textAlign: "right",
    display: "none",
  },
  secondRightIcon: {
    right: "3.2%",
    left: "90.4%",
  },
  firstRightIcon: {
    right: "12.8%",
    left: "80.8%",
  },
  title: {
    left: "45.33%",
    fontWeight: "500",
    fontFamily: FontFamily.asapMedium,
    color: Color.black,
    textAlign: "center",
  },
  iconsSettings: {
    right: "90.4%",
    left: "3.2%",
  },
  icon2Icons: {
    width: 375,
    height: 44,
  },
});

export default Icon2Icons;
