import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";

const LanguageContainer = ({
  userLanguage,
  userLanguageCode,
  userThemeSetting,
  userAppearanceSetting,
  showMain,
  showUSD,
  showIconsArrowsRIght,
  uSDVisible,
  iconsArrowsRIghtVisible,
}) => {

const arrowpng = require('../../assets/arrowright.png');

  return (
    <View style={[styles.main, styles.mainLayout]}>
      <View style={[styles.title, styles.titlePosition]}>
        {showMain && (
          <Text style={[styles.main1, styles.main1FlexBox]}>Main</Text>
        )}
      </View>
      <View style={[styles.topBottom, styles.mainLayout]}>
        <View style={styles.backgroundPosition} />
        <View style={[styles.bottomSeparator, styles.separatorPosition]} />
        <View style={[styles.topSeparator, styles.separatorPosition]} />
      </View>
      <View style={[styles.cell, styles.cellLayout]}>
        <View style={styles.background1}>
          <View style={[styles.background2, styles.backgroundPosition]} />
          <View style={[styles.bottomSeparator1, styles.separatorPosition]} />
        </View>
        <View style={styles.valueArrow}>
          {showUSD && (
            <Text style={[styles.usd, styles.usdPosition]}>{userLanguage}</Text>
          )}
          {showIconsArrowsRIght && (
            <Image
              style={styles.iconsArrowsRight}
              contentFit="cover"
              source={arrowpng}
            />
          )}
        </View>
        <Text style={[styles.currency, styles.usdPosition]}>
          {userLanguageCode}
        </Text>
      </View>
      <View style={[styles.cell1, styles.cellLayout]}>
        <View style={styles.background1}>
          <View style={styles.backgroundPosition} />
          <View style={[styles.bottomSeparator1, styles.separatorPosition]} />
        </View>
        <View style={styles.valueArrow}>
          {uSDVisible && (
            <Text style={[styles.usd, styles.usdPosition]}>
              {userThemeSetting}
            </Text>
          )}
          {iconsArrowsRIghtVisible && (
            <Image
              style={styles.iconsArrowsRight}
              contentFit="cover"
              source={arrowpng}
            />
          )}
        </View>
        <Text style={[styles.currency, styles.usdPosition]}>
          {userAppearanceSetting}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainLayout: {
    width: 375,
    position: "absolute",
  },
  titlePosition: {
    top: 0,
    left: 0,
  },
  main1FlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  separatorPosition: {
    opacity: 0.1,
    height: 1,
    backgroundColor: Color.grayscaleBlack,
    right: 0,
    position: "absolute",
  },
  cellLayout: {
    height: 44,
    width: 375,
    left: 0,
    position: "absolute",
  },
  backgroundPosition: {
    backgroundColor: Color.colorWhite,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  usdPosition: {
    top: "50%",
    fontFamily: FontFamily.asapMedium,
    fontWeight: "500",
    letterSpacing: -0.3,
    position: "absolute",
  },
  main1: {
    top: "24.24%",
    left: "4.27%",
    fontSize: FontSize.size_sm,
    opacity: 0.3,
    fontFamily: FontFamily.asapMedium,
    fontWeight: "500",
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  title: {
    height: 33,
    width: 375,
    position: "absolute",
  },
  bottomSeparator: {
    bottom: 0,
    left: 0,
  },
  topSeparator: {
    top: 0,
    left: 0,
  },
  topBottom: {
    height: 88,
    top: 33,
    left: 0,
  },
  background2: {
    display: "none",
  },
  bottomSeparator1: {
    left: 16,
    bottom: 0,
  },
  background1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  usd: {
    marginTop: -10,
    right: 30,
    fontSize: FontSize.size_base,
    color: Color.primary,
    textAlign: "right",
  },
  iconsArrowsRight: {
    height: "54.55%",
    width: "12.83%",
    top: "22.73%",
    right: "2.14%",
    bottom: "22.73%",
    left: "85.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.2,
    position: "absolute",
  },
  valueArrow: {
    width: 187,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  currency: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    opacity: 0.7,
    left: 16,
    textAlign: "left",
    color: Color.black,
  },
  cell: {
    top: 33,
  },
  cell1: {
    top: 77,
  },
  main: {
    top: 88,
    height: 121,
    left: 0,
  },
});

export default LanguageContainer;
