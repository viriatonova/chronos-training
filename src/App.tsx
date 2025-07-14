import './App.css';
import '@mantine/core/styles.css';
import { useContext } from 'react';
import { AppShell, Container } from '@mantine/core';
import MediaQueryContext from './contexts/MediaQueryContext';
import AppHeader from './components/AppHeader';
import Timer from './components/Timer';
import AppSettings from './components/AppSettings';

function App() {
  const { mediaQuery } = useContext(MediaQueryContext);

  return (
    <AppShell
      header={{ height: { base: 60, md: 60, lg: 80, xl: 80 } }}
      padding='md'
    >
      <AppShell.Header>
        <Container h={'100%'} size={mediaQuery ? 'lg' : 'sm'}>
          <AppHeader />
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container h={'100%'} size={mediaQuery ? 'lg' : 'sm'}>
          <Timer start={true} stop={false} />
          <AppSettings />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
