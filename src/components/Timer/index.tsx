import { useContext } from 'react';
import { Button, Paper, Text, Flex } from '@mantine/core';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerStop,
} from '@tabler/icons-react';
import classes from './times.module.css';
import MediaQueryContext from '../../contexts/MediaQueryContext';
import Ciclos from '../Ciclos';
interface TimerProps {
  start: boolean;
  stop: boolean;
}
function Timer({ start, stop }: TimerProps) {
  const { mediaQuery } = useContext(MediaQueryContext);
  return (
    <Flex
      direction='column'
      justify='flex-end'
      align='flex-end'
      gap={mediaQuery ? 20 : 10}
    >
      <Paper w={'100%'} shadow='lg' radius='lg' withBorder>
        <Text
          w={'100%'}
          className={classes.timer}
          fz={{ base: 100, md: 120, lg: 140, xl: 160 }}
          fw='bold'
          ta='center'
        >
          10:00
        </Text>
        {start && stop}
      </Paper>
      <Flex
        w={'100%'}
        gap={mediaQuery ? 20 : 10}
        direction='row'
        justify={'flex-start'}
        align={'center'}
      >
        <Button>
          <IconPlayerPlay>Start</IconPlayerPlay>
        </Button>
        <Button>
          <IconPlayerPause>Start</IconPlayerPause>
        </Button>
        <Button>
          <IconPlayerStop>Start</IconPlayerStop>
        </Button>
        <Ciclos ciclos={5} />
      </Flex>
    </Flex>
  );
}

export default Timer;
