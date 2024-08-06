import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TransactionSummaryContainer = ({
  paymentMethod,
  transactionAmount,
  propBottom,
  propLeft,
  propColor,
  onCardPress,
}) => {
  const cardStyle = useMemo(() => {
    return {
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("left", propLeft),
    };
  }, [propBottom, propLeft]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <Pressable style={[styles.card, cardStyle]} onPress={onCardPress}>
      <View style={styles.cardChild} />
      <Text style={[styles.creditCard, styles.textPosition]}>
        {paymentMethod}
      </Text>
      <Text style={[styles.text, styles.textPosition, textStyle]}>
        {transactionAmount}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    display: "none",
    textAlign: "left",
    left: 12,
    position: "absolute",
  },
  cardChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  creditCard: {
    top: 13,
    fontSize: FontSize.size_base,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.asapMedium,
    color: Color.black,
    opacity: 0.6,
  },
  text: {
    top: 37,
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.6,
    fontStyle: "italic",
    fontFamily: FontFamily.asapItalic,
    color: Color.red,
  },
  card: {
    bottom: 525,
    left: 174,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 119,
    height: 82,
    position: "absolute",
  },
});

export default TransactionSummaryContainer;
