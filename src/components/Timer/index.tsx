import { useContext } from 'react';
import { Button, Paper, Text, Flex } from '@mantine/core';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerStop,
} from '@tabler/icons-react';
import classes from './timer.module.css';
import Ciclos from '../Ciclos';
import MediaQueryContext from '../../contexts/MediaQueryContext';
import useTaskContext from '../../hooks/useTaskContext';

interface TimerProps {
  start: boolean;
  stop: boolean;
}

function Timer({ start, stop }: TimerProps) {
  const { mediaQuery } = useContext(MediaQueryContext);
  const taskContext = useTaskContext();
  const iconSize = 30;

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
          {taskContext.state.formattedSecondsRemaining}
        </Text>
        {start && stop}
      </Paper>
      <Flex
        w={'100%'}
        gap={mediaQuery ? 20 : 10}
        direction={mediaQuery ? 'row' : 'column'}
        justify={mediaQuery ? 'center' : 'flex-start'}
        align={mediaQuery ? 'center' : 'flex-start'}
      >
        <Flex
          w={mediaQuery ? '40%' : '100%'}
          mt={mediaQuery ? 0 : 20}
          gap={mediaQuery ? 20 : 10}
          direction='row'
          justify={'flex-start'}
          align={mediaQuery ? 'center' : 'flex-start'}
        >
          <Button>
            <IconPlayerPlay size={iconSize}>Start</IconPlayerPlay>
          </Button>
          <Button>
            <IconPlayerPause size={iconSize}>Start</IconPlayerPause>
          </Button>
          <Button>
            <IconPlayerStop size={iconSize}>Start</IconPlayerStop>
          </Button>
        </Flex>
        <Ciclos ciclos={5} />
      </Flex>
    </Flex>
  );
}

export default Timer;
