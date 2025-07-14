import { Flex, Text } from '@mantine/core';
import ToggleThemeColorButton from '../Elements/toggleThemeColorButton';
import AppMenu from '../AppMenu';
function AppHeader() {
  return (
    <Flex h={'100%'} direction='row' justify={'space-between'} align={'center'}>
      <AppMenu />
      <Text fz={'xl'}>Dylan</Text>
      <ToggleThemeColorButton />
    </Flex>
  );
}

export default AppHeader;
