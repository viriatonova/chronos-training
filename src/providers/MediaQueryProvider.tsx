'use client';

import React from 'react';
import MediaQueryContext from '../contexts/MediaQueryContext';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

function MediaQueryProvider({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const mediaQuery = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  return (
    <MediaQueryContext.Provider
      value={{
        mediaQuery,
      }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
}

export default MediaQueryProvider;
