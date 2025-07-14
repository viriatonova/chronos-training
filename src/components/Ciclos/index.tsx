import { useContext } from 'react';
import { Flex, Title, ColorSwatch } from '@mantine/core';
import MediaQueryContext from '../../contexts/MediaQueryContext';

interface CiclosProps {
  ciclos: number;
}
function Ciclos({ ciclos }: CiclosProps) {
  const { mediaQuery } = useContext(MediaQueryContext);

  return (
    <Flex
      w={'100%'}
      mt={mediaQuery ? 0 : 20}
      gap={10}
      direction='row'
      justify='flex-start'
      align='center'
    >
      <Title order={2}>Ciclos :</Title>
      {Array.from({ length: ciclos }).map((_, i) => (
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
