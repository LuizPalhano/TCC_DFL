import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FriendshipTestFormContainer = ({
  showCrads,
  propTextShadowRadius,
  onCardPress,
  onCardPress1,
}) => {
  const friendshipTestStyle = useMemo(() => {
    return {
      ...getStyleValue("textShadowRadius", propTextShadowRadius),
    };
  }, [propTextShadowRadius]);

  return (
    showCrads && (
      <View style={styles.crads}>
        <Pressable
          style={[styles.card, styles.cardLayout]}
          onPress={onCardPress}
        >
          <View style={styles.cardChild} />
          <Text style={styles.creditCard}>Credit card</Text>
          <Text style={styles.text}>-$532</Text>
        </Pressable>
        <Pressable
          style={[styles.card1, styles.cardLayout]}
          onPress={onCardPress1}
        >
          <View style={styles.cardChild} />
          <Text style={styles.creditCard}>Cash</Text>
          <Text style={styles.text1}>$23 092.20</Text>
        </Pressable>
        <Text
          style={[
            styles.friendshipTest,
            styles.friendshipTestTypo,
            friendshipTestStyle,
          ]}
        >
          Friendship Test
        </Text>
        <Text style={[styles.profileCreation, styles.friendshipTestTypo]}>
          Profile Creation
        </Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 82,
    left: 0,
    width: 343,
    position: "absolute",
  },
  friendshipTestTypo: {
    textShadowRadius: 3,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 10,
    width: 291,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_13xl,
    color: Color.red,
    letterSpacing: -0.6,
    fontFamily: FontFamily.asapMedium,
    fontWeight: "500",
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
    color: Color.black,
    opacity: 0.6,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.asapMedium,
    fontWeight: "500",
    left: 12,
    position: "absolute",
  },
  text: {
    color: Color.red,
    fontFamily: FontFamily.asapItalic,
    fontStyle: "italic",
    letterSpacing: -0.6,
    fontSize: FontSize.size_9xl,
    top: 37,
    display: "none",
    textAlign: "left",
    left: 12,
    position: "absolute",
  },
  card: {
    bottom: 0,
  },
  text1: {
    color: Color.primary,
    fontFamily: FontFamily.asapItalic,
    fontStyle: "italic",
    letterSpacing: -0.6,
    fontSize: FontSize.size_9xl,
    top: 37,
    display: "none",
    textAlign: "left",
    left: 12,
    position: "absolute",
  },
  card1: {
    bottom: 103,
  },
  friendshipTest: {
    top: 36,
    left: 26,
  },
  profileCreation: {
    top: 139,
    left: 25,
  },
  crads: {
    bottom: 333,
    left: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 185,
    width: 343,
    position: "absolute",
  },
});

export default FriendshipTestFormContainer;
