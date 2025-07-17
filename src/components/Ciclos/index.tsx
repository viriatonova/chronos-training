import { Flex, Title, ColorSwatch } from '@mantine/core';
import useTaskContext from '../../hooks/useTaskContext';
import useContainerQuery from '../../hooks/useCantainerQuery';

function Ciclos() {
  const containerQuery = useContainerQuery();
  const { taskState } = useTaskContext();

  return (
    <Flex
      w={'100%'}
      mt={containerQuery ? 0 : 20}
      gap={10}
      direction='row'
      justify='flex-start'
      align='center'
    >
      <Title order={2}>Ciclo :</Title>
      {Array.from({ length: taskState.currentCycle }).map((_, i) => (
        <ColorSwatch
          size={containerQuery ? 40 : 30}
          key={i}
          color='var(--mantine-color-orange-7)'
        />
      ))}
    </Flex>
  );
}

export default Ciclos;
