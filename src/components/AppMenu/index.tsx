import { Menu, Burger } from '@mantine/core';
import { IconHome, IconHistory, IconAdjustmentsAlt } from '@tabler/icons-react';
import useContainerQuery from '../../hooks/useCantainerQuery';
function AppMenu() {
  const containerQuery = useContainerQuery();

  return (
    <Menu width={containerQuery ? 200 : 300} position='bottom-start'>
      <Menu.Target>
        <Burger size='md' opened={false} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<IconHome size={14} />}>Home</Menu.Item>
        <Menu.Item leftSection={<IconHistory size={14} />}>
          Training History
        </Menu.Item>
        <Menu.Item leftSection={<IconAdjustmentsAlt size={14} />}>
          Settings
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default AppMenu;
