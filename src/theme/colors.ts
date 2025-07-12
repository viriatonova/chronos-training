import type { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

export const sciGreen: MantineColorsTuple = [
  '#f4faf0',
  '#e7f2e0',
  '#cbe5bb',
  '#add793',
  '#93cb71',
  '#83c45b',
  '#7ac050',
  '#68a940',
  '#5b9637',
  '#070c04',
];

type ExtendedCustomColors = 'sciGreen' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
