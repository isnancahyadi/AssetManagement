import {configureFonts} from 'react-native-paper';

const baseFont = {
  fontFamily: 'RedHatDisplay-Regular',
};

const baseVariant = configureFonts({config: baseFont});

const customVariant = {
  headlineLarger: {
    ...baseVariant.headlineLarge,
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 42,
    lineHeight: 50,
  },
  headlineLarge: {
    ...baseVariant.headlineLarge,
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 32,
    lineHeight: 36,
  },
  headlineMedium1: {
    ...baseVariant.headlineMedium,
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 28,
    lineHeight: 34,
  },
  headlineMedium2: {
    ...baseVariant.headlineMedium,
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 24,
    lineHeight: 30,
  },
  titleLarge: {
    ...baseVariant.titleLarge,
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 22,
    lineHeight: 26,
  },
  titleMedium: {
    ...baseVariant.titleMedium,
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 20,
    lineHeight: 24,
  },
  titleSmall: {
    ...baseVariant.titleSmall,
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 16,
    lineHeight: 20,
  },
  textLarge: {
    ...baseVariant.titleLarge,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    lineHeight: 21.17,
  },
  textMedium: {
    ...baseVariant.titleMedium,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 14,
    lineHeight: 18.52,
  },
  textSmall: {
    ...baseVariant.titleSmall,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 12,
    lineHeight: 15.88,
  },
  labelLarge: {
    ...baseVariant.labelLarge,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 14,
    lineHeight: 18.52,
  },
  labelMedium: {
    ...baseVariant.labelMedium,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 12,
    lineHeight: 15.88,
  },
  labelSmall: {
    ...baseVariant.labelMedium,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 11,
    lineHeight: 14.55,
  },
  bodyLarger: {
    ...baseVariant.bodyLarge,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 18,
    lineHeight: 26,
  },
  bodyLarge: {
    ...baseVariant.bodyLarge,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    ...baseVariant.bodyMedium,
    fontFamily: 'RedHatDisplay-Light',
    fontSize: 14,
    lineHeight: 20,
  },
  bodySmall: {
    ...baseVariant.bodySmall,
    fontFamily: 'RedHatDisplay-Light',
    fontSize: 13,
    lineHeight: 18,
  },
};

const fonts = configureFonts({
  config: {
    ...baseVariant,
    ...customVariant,
  },
});

export default fonts;
