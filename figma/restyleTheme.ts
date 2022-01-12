import tokens from './tokens.json';
import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  spacing: {
    m: tokens.Spacing.m,
    s: tokens.Spacing.s,
    l: tokens.Spacing.l
  },
  colors: {
    primary: tokens.Colors.primary,
    green: tokens.FigmaColors.green
  },
  textVariants: {
    primaryButtonText: {
      fontFamily: tokens.FigmaTexts.primaryButtonText.fontFamily,
      fontWeight: tokens.FigmaTexts.primaryButtonText.fontWeight,
      fontSize: tokens.FigmaTexts.primaryButtonText.fontSize
    }
  }
});

export type Theme = typeof theme;
export default theme;
