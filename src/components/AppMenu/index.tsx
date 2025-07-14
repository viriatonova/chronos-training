import { useContext } from 'react';
import { Menu, ActionIcon } from '@mantine/core';
import {
  IconSettings,
  IconHome,
  IconHistory,
  IconAdjustmentsAlt,
} from '@tabler/icons-react';
import MediaQueryContext from '../../contexts/MediaQueryContext';

function AppMenu() {
  const { mediaQuery } = useContext(MediaQueryContext);

  return (
    <Menu width={mediaQuery ? 200 : 300} position='bottom-start'>
      <Menu.Target>
        <ActionIcon variant='default' size={'xl'}>
          <IconSettings stroke={1.5} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
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
