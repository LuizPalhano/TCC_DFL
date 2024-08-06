import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

const ContainerCard = ({ onCardPress, onRectanglePressablePress }) => {
  return (
    <Pressable style={styles.card} onPress={onCardPress}>
      <Pressable style={styles.cardChild} onPress={onRectanglePressablePress} />
      <Text style={[styles.cash, styles.cashPosition]}>Cash</Text>
      <Text style={[styles.text, styles.cashPosition]}>$23 092.20</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cashPosition: {
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
  cash: {
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
    color: Color.primary,
  },
  card: {
    bottom: 418,
    left: 0,
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

export default ContainerCard;
