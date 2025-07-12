import './App.css';
import '@mantine/core/styles.css';

import { AppShell, Container, MantineProvider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from './theme';
import AppHeader from './components/sections/AppHeader';
import Timer from './components/blocks/Timer';

function App() {
  const containerQuery = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  return (
    <MantineProvider theme={theme} defaultColorScheme='light'>
      <AppShell
        header={{ height: { base: 60, md: 60, lg: 80, xl: 80 } }}
        padding='md'
      >
        <AppShell.Header>
          <Container h={'100%'} size={containerQuery ? 'lg' : 'sm'}>
            <AppHeader />
          </Container>
        </AppShell.Header>
        <AppShell.Main>
          <Container h={'100%'} size={containerQuery ? 'lg' : 'sm'}>
            <Timer start={true} stop={false} />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
