import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../../GlobalStyles";
import FriendshipTestFormContainer from "./FriendshipTestFormContainer";
import Icon2Icons from "./Icon2Icons";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AccountContainer = ({
  profileCreationTextShadowRadius,
  onCardPress,
  onCardPress1,
  onSecondRightIconPress,
  onIconsSettingsPress,
}) => {
  const friendshipTestStyle = useMemo(() => {
    return {
      ...getStyleValue("textShadowRadius", profileCreationTextShadowRadius),
    };
  }, [profileCreationTextShadowRadius]);

  return (
    <View style={styles.backgroundPosition}>
      <View style={[styles.background, styles.backgroundPosition]} />
      <FriendshipTestFormContainer
        showCrads
        onCardPress={() => navigation.navigate("CategoryPersonal")}
        onCardPress1={() => navigation.navigate("CategoryFriend")}
      />
      <Icon2Icons
        firstRightIcon={require("../../assets/second-right-icon.png")}
        showSeparator={false}
        showIconsSettings={false}
        icon2IconsPosition="absolute"
        icon2IconsTop={44}
        icon2IconsLeft={0}
        icon2IconsWidth={375}
        doneTop="29.55%"
        doneLeft="85.6%"
        secondRightIconOverflow="unset"
        secondRightIconMaxHeight="unset"
        firstRightIconPosition="unset"
        firstRightIconHeight="100%"
        firstRightIconWidth="100%"
        firstRightIconTop="unset"
        firstRightIconRight="unset"
        firstRightIconBottom="unset"
        firstRightIconLeft="unset"
        titleTop="22.73%"
        titleLeft="80.8%"
        titleFontWeight="unset"
        titleFontFamily="unset"
        titleColor="unset"
        titleTextAlign="unset"
        titleHeight="54.55%"
        titleWidth="6.4%"
        titleRight="12.8%"
        titleBottom="22.73%"
        titleOverflow="hidden"
        titleMaxHeight="100%"
        iconsSettingsHeight="unset"
        iconsSettingsWidth="unset"
        iconsSettingsTop="29.55%"
        iconsSettingsRight="unset"
        iconsSettingsBottom="unset"
        iconsSettingsLeft="41.07%"
        iconsSettingsOverflow="unset"
        iconsSettingsMaxHeight="unset"
        onSecondRightIconPress={() => navigation.navigate("AllAccountsPopup")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    height: 812,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.red,
  },
});

export default AccountContainer;
