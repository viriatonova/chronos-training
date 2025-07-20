import App from './App.tsx';
import TaskProvider from './providers/TaskProvider';
import SessionProvider from './providers/SessionProvider.tsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='light'>
      <TaskProvider>
        <SessionProvider>
          <App />
        </SessionProvider>
      </TaskProvider>
    </MantineProvider>
  </StrictMode>,
);
