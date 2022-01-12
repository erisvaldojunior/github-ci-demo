import tokens from './tokens.json';
import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  spacing: {
    xxxs: tokens.Spacing.xxxs,
    xxs: tokens.Spacing.xxs,
    xs: tokens.Spacing.xs,
    s: tokens.Spacing.s,
    m: tokens.Spacing.m,
    l: tokens.Spacing.l,
    xl: tokens.Spacing.xl,
    xxl: tokens.Spacing.xxl,
    xxxl: tokens.Spacing.xxxl,
    xxxxl: tokens.Spacing.xxxxl,
    xxxxs: tokens.Spacing.xxxxs
  },
  colors: {
    secondaryButton: tokens.FigmaColors.secondaryButton,
    warningRed: tokens.FigmaColors.warningRed,
    successGreen: tokens.FigmaColors.successGreen,
    white: tokens.FigmaColors.white,
    lightGray: tokens.FigmaColors.lightGray,
    mediumGray: tokens.FigmaColors.mediumGray,
    darkGray: tokens.FigmaColors.darkGray,
    lightBlue: tokens.FigmaColors.lightBlue,
    mediumBlue: tokens.FigmaColors.mediumBlue,
    darkBlue: tokens.FigmaColors.darkBlue,
    lightGreen: tokens.FigmaColors.lightGreen,
    darkGreen: tokens.FigmaColors.darkGreen
  },
  textVariants: {
    tableLabel: {
      fontFamily: tokens.FigmaTexts.tableLabel.fontFamily,
      fontWeight: tokens.FigmaTexts.tableLabel.fontWeight,
      fontSize: tokens.FigmaTexts.tableLabel.fontSize
    },
    smallButtonText: {
      fontFamily: tokens.FigmaTexts.smallButtonText.fontFamily,
      fontWeight: tokens.FigmaTexts.smallButtonText.fontWeight,
      fontSize: tokens.FigmaTexts.smallButtonText.fontSize
    },
    smallText: {
      fontFamily: tokens.FigmaTexts.smallText.fontFamily,
      fontWeight: tokens.FigmaTexts.smallText.fontWeight,
      fontSize: tokens.FigmaTexts.smallText.fontSize
    },
    buttonText: {
      fontFamily: tokens.FigmaTexts.buttonText.fontFamily,
      fontWeight: tokens.FigmaTexts.buttonText.fontWeight,
      fontSize: tokens.FigmaTexts.buttonText.fontSize
    },
    bodyHighlight: {
      fontFamily: tokens.FigmaTexts.bodyHighlight.fontFamily,
      fontWeight: tokens.FigmaTexts.bodyHighlight.fontWeight,
      fontSize: tokens.FigmaTexts.bodyHighlight.fontSize
    },
    mainButton: {
      fontFamily: tokens.FigmaTexts.mainButton.fontFamily,
      fontWeight: tokens.FigmaTexts.mainButton.fontWeight,
      fontSize: tokens.FigmaTexts.mainButton.fontSize
    },
    header2: {
      fontFamily: tokens.FigmaTexts.header2.fontFamily,
      fontWeight: tokens.FigmaTexts.header2.fontWeight,
      fontSize: tokens.FigmaTexts.header2.fontSize
    },
    header1: {
      fontFamily: tokens.FigmaTexts.header1.fontFamily,
      fontWeight: tokens.FigmaTexts.header1.fontWeight,
      fontSize: tokens.FigmaTexts.header1.fontSize
    },
    primaryButtonText: {
      fontFamily: tokens.FigmaTexts.primaryButtonText.fontFamily,
      fontWeight: tokens.FigmaTexts.primaryButtonText.fontWeight,
      fontSize: tokens.FigmaTexts.primaryButtonText.fontSize
    }
  }
});

export type Theme = typeof theme;
export default theme;
