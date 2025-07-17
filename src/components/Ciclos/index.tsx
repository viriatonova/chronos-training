import { useContext } from 'react';
import { Flex, Title, ColorSwatch } from '@mantine/core';
import MediaQueryContext from '../../contexts/MediaQueryContext';
import useTaskContext from '../../hooks/useTaskContext';

function Ciclos() {
  const { mediaQuery } = useContext(MediaQueryContext);
  const { taskState } = useTaskContext();

  return (
    <Flex
      w={'100%'}
      mt={mediaQuery ? 0 : 20}
      gap={10}
      direction='row'
      justify='flex-start'
      align='center'
    >
      <Title order={2}>Ciclo :</Title>
      {Array.from({ length: taskState.currentCycle }).map((_, i) => (
        <ColorSwatch
          size={mediaQuery ? 40 : 30}
          key={i}
          color='var(--mantine-color-orange-7)'
        />
      ))}
    </Flex>
  );
}

export default Ciclos;
