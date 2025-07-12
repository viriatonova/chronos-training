import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core';
import { sciGreen } from './colors';

const customTheme = createTheme({
  colors: {
    sciGreen,
  },
  primaryColor: 'sciGreen',
});

export const theme = mergeMantineTheme(DEFAULT_THEME, customTheme);
