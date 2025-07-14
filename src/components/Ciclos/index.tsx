import { Flex, Title, ColorSwatch } from '@mantine/core';

interface CiclosProps {
  ciclos: number;
}
function Ciclos({ ciclos }: CiclosProps) {
  return (
    <Flex ml={20} gap={10} direction='row' justify='flex-start' align='center'>
      <Title>Ciclos :</Title>
      {Array.from({ length: ciclos }).map((_, i) => (
        <ColorSwatch size={40} key={i} color='var(--mantine-color-orange-7)' />
      ))}
    </Flex>
  );
}

export default Ciclos;
