import App from './App.tsx';
import MediaQueryProvider from './providers/MediaQueryProvider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='light'>
      <MediaQueryProvider>
        <App />
      </MediaQueryProvider>
    </MantineProvider>
  </StrictMode>,
);
