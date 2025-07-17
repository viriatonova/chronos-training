import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

export default function useContainerQuery() {
  const theme = useMantineTheme();
  const containerQuery = useState(
    useMediaQuery(`(min-width: ${theme.breakpoints.lg})`),
  );
  return containerQuery;
}
