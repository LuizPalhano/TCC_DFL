import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const ActionSheetContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.actionSheetCopy}>
      <View style={[styles.viewsactionSheetbaseSheet, styles.buttonPosition]}>
        <Image
          style={[styles.platterIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/platter.png")}
        />
        <Text style={styles.label}>Cancel</Text>
      </View>
      <View style={[styles.button4, styles.buttonPosition]}>
        <Image
          style={[styles.platterIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/platter1.png")}
        />
        <Pressable
          style={[styles.uiViewsActionSheetOver, styles.viewsPosition]}
          onPress={() => navigation.navigate("AccountLogIn")}
        >
          <Text style={[styles.label1, styles.label1Position]}>Account</Text>
        </Pressable>
      </View>
      <View style={[styles.button2, styles.buttonPosition]}>
        <Image
          style={[styles.platterIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/platter2.png")}
        />
        <Image
          style={[styles.lineIcon, styles.viewsPosition]}
          contentFit="cover"
          source={require("../../assets/line.png")}
        />
        <View style={[styles.uiViewsActionSheetOverr, styles.viewsPosition]}>
          <Text style={[styles.action, styles.label1Position]}>Add</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: 10,
    right: 10,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  viewsPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  label1Position: {
    width: 335,
    fontFamily: FontFamily.asapRegular,
    top: 13,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: 10,
    position: "absolute",
  },
  platterIcon: {
    borderRadius: Border.br_sm,
    left: 0,
    right: 0,
    top: 0,
    overflow: "hidden",
    maxWidth: "100%",
    bottom: 0,
    position: "absolute",
  },
  label: {
    top: 16,
    fontStyle: "italic",
    fontFamily: FontFamily.asapItalic,
    width: 355,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.primary,
    lineHeight: 24,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  viewsactionSheetbaseSheet: {
    top: 246,
    bottom: 11,
  },
  platterIcon1: {
    left: 0,
    right: 0,
    top: 0,
    overflow: "hidden",
    maxWidth: "100%",
    bottom: 0,
    position: "absolute",
  },
  label1: {
    height: 24,
    color: Color.primary,
    lineHeight: 24,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xl,
    width: 335,
    fontFamily: FontFamily.asapRegular,
    top: 13,
  },
  uiViewsActionSheetOver: {
    height: "86.55%",
    top: "6.21%",
    bottom: "7.24%",
  },
  button4: {
    top: 182,
    bottom: 74,
  },
  lineIcon: {
    height: "1.84%",
    top: "98.16%",
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  action: {
    fontSize: FontSize.size_smi,
    letterSpacing: -0.1,
    lineHeight: 18,
    color: Color.black,
    height: 7,
    opacity: 0.3,
  },
  uiViewsActionSheetOverr: {
    height: "86.58%",
    top: "13.16%",
    bottom: "0.26%",
  },
  button2: {
    top: 144,
    bottom: 132,
  },
  actionSheetCopy: {
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    height: 314,
    bottom: 0,
    position: "absolute",
  },
});

export default ActionSheetContainer;
