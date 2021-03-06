// MEDIA QUERIES
const createMediaQuery = n => '@media screen and (min-width:${n})';

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

// Break-points
export const breakpoints = [32, 40, 48, 64].map(n => n + 'em');

export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ['sm', 'md', 'lg', 'xl'];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

// SPACING SCALE
export const space = [0, 4, 8, 16, 32, 40, 64, 128];

// TYPOGRAPHY //
export const font = '"Inter", -apple-system, BlinkMacSystemFont, sans-serif';
export const fontSizes = [12, 14, 16, 20, 24, 32];

// Weights
export const regular = 400;
export const medium = 500;
export const bold = 700;
// styled-system's 'fontWeight' function can hook into the 'fontWeights' object
export const fontWeights = {
  regular,
  medium,
  bold
};

// Line-height
export const lineHeights = {
  standard: 1.5,
  heading: 1.25
};

// Scale
export const textStyles = {
  heading4: {
    fontSize: fontSizes[5] + 'rem',
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.heading
  },
  heading3: {
    fontSize: fontSizes[4] + 'rem',
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.heading
  },
  heading2: {
    fontSize: fontSizes[3] + 'rem',
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.heading
  },
  heading1: {
    fontSize: fontSizes[2] + 'rem',
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.heading
  },
  heading0: {
    fontSize: fontSizes[1] + 'rem',
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.heading
  },
  body1: {
    fontSize: fontSizes[2] + 'rem',
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.standard
  },
  body0: {
    fontSize: fontSizes[1] + 'rem',
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.standard
  },
  small: {
    fontSize: fontSizes[0] + 'rem',
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.standard
  }
};

// COLOR PALETTE

//Brand
const purple = '#5a28c6';
const darkPurple = '#2d2838';
const blue = '#4a93ff';
const red = '#d14545';
const orange = '#fbaa31';
const green = '#6fc78d';

//Grayscale
const black = '#2d2838';
const gray400 = '#615e67';
const gray300 = '#a09ca8';
const gray200 = '#d9d8de';
const gray100 = '#f1f0f6';
const white = '#ffffff';

// Misc
const text = gray400;
const inputBg = '#faf9fd';
const baseBorderColor = gray200;

const colors = {
  purple,
  darkPurple,
  blue,
  red,
  orange,
  green,
  gray100,
  gray200,
  gray300,
  gray400,
  white,
  black,
  text,
  inputBg,
  baseBorderColor
};

export { colors };

// BORDERS
// styled-system's 'borderRadius' function can hook into the 'radii' object/array
export const radii = [0, 3];
export const radius = '3px';

//PAGE WRAPPER
export const maxContainerWidth = '1280px';

// BOXSHADOWS
export const shadows = [
  //Box shadow styles to go here
];

//Z-INDEX
export const zIndices = [0, 9, 99, 999, 9999];

// EXPORT THEME
const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  fontWeights,
  lineHeights,
  regular,
  bold,
  textStyles,
  colors,
  radii,
  radius,
  shadows,
  zIndices,
  maxContainerWidth
};

export default theme;
