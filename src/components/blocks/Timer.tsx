import { Paper, Text, Flex } from '@mantine/core';
import classes from './block.module.css';
interface TimerProps {
  start: boolean;
  stop: boolean;
}
function Timer({ start, stop }: TimerProps) {
  return (
    <Paper
      w={'100%'}
      p={{ base: 'md', md: 'md', lg: 'md', xl: 'md' }}
      shadow='lg'
      radius='lg'
      withBorder
    >
      <Flex direction='column' justify='center' align={'center'}>
        <Text
          className={classes.timer}
          fz={{ base: 100, md: 120, lg: 140, xl: 160 }}
          fw={700}
        >
          10:00
        </Text>
        {start && stop}
      </Flex>
    </Paper>
  );
}

export default Timer;
