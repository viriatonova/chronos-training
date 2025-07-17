import './App.css';
import '@mantine/core/styles.css';
import { AppShell, Container } from '@mantine/core';
import AppHeader from './components/AppHeader';
import useContainerQuery from './hooks/useCantainerQuery';

type AppLayoutProps = {
  children: React.ReactNode;
};
function AppLayout({ children }: AppLayoutProps) {
  const containerQuery = useContainerQuery();

  return (
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
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default AppLayout;
