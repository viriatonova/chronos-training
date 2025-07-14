import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core';
import { sciGreen } from './colors';

const customTheme = createTheme({
  colors: {
    sciGreen,
  },
  primaryColor: 'sciGreen',
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '22px',
    axl: '26px',
    bxl: '30px',
    cxl: '36px',
    dxl: '48px',
    exl: '60px',
    fxl: '72px',
    gxl: '96px',
    hxl: '128px',
  },
  headings: {
    sizes: {
      h1: {
        fontSize: '{base: bxl, md: bxl, lg: cxl, xl: exl,}',
      },
      h2: {
        fontSize: '{base: xl, md: axl, lg: bxl, xl: cxl,}',
      },
      h3: {
        fontSize: '{base: lg, md: xl, lg: axl, xl: bxl,}',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        fullWidth: true,
        size: 'md',
        variant: 'outline',
        color: 'sciGreen',
        p: 'xs',
      },
    },
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, customTheme);
