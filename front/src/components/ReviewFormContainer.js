import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ReviewFormContainer = ({
  actionButtonText,
  rectangleViewTop,
  propLeft,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangleViewTop),
    };
  }, [rectangleViewTop]);

  const sendYourReviewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.button, buttonStyle]}>
      <View style={[styles.buttonChild, styles.buttonBg]} />
      <View style={[styles.buttonItem, styles.buttonBg]} />
      <Text style={[styles.sendYourReview, sendYourReviewStyle]}>
        {actionButtonText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  buttonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  buttonItem: {
    height: "108%",
    width: "101.17%",
    top: "-4%",
    right: "-0.58%",
    bottom: "-4%",
    left: "-0.58%",
    borderStyle: "solid",
    borderColor: Color.primary,
    borderWidth: 2,
    opacity: 0.1,
  },
  sendYourReview: {
    top: "30%",
    left: "32.07%",
    fontSize: FontSize.size_mid,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.asapMedium,
    color: Color.primary,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    top: 660,
    left: 16,
    width: 343,
    height: 50,
    position: "absolute",
  },
});

export default ReviewFormContainer;
