import classes from './timer.module.css';
import Ciclos from '../Ciclos';
import useTaskContext from '../../hooks/useTaskContext';
import useContainerQuery from '../../hooks/useCantainerQuery';

import { Button, Paper, Text, Flex } from '@mantine/core';
import {
  getNextCycle,
  getCycleType,
} from '../../core/tasks/application/Task.usecase.ts';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerStop,
} from '@tabler/icons-react';

interface TimerProps {
  start: boolean;
  stop: boolean;
}

function Timer({ start, stop }: TimerProps) {
  const containerQuery = useContainerQuery();
  const { taskState, setTaskState } = useTaskContext();

  /**Updating the next task cycle from prev cycle */
  const nextCycle = getNextCycle(taskState.currentCycle);

  /**Updating the next task type from prev cycle */
  const nextTaskType = getCycleType(nextCycle);

  const handleStart = () => {
    setTaskState(prevState => {
      return {
        ...prevState,
        activeTask: prevState.tasks[0] || null,
        formattedSecondsRemaining: '00:00',
        currentCycle: nextCycle,
        type: nextTaskType,
        config: { ...prevState.config },
      };
    });
  };

  const handlePause = () => {};
  const handleStop = () => {};

  return (
    <Flex
      direction='column'
      justify='flex-end'
      align='flex-end'
      gap={containerQuery ? 20 : 10}
    >
      <Paper w={'100%'} shadow='lg' radius='lg' withBorder>
        <Text
          w={'100%'}
          className={classes.timer}
          fz={{ base: 100, md: 120, lg: 140, xl: 160 }}
          fw='bold'
          ta='center'
        >
          {taskState.formattedSecondsRemaining}
        </Text>
        {start && stop}
      </Paper>
      <Flex
        w={'100%'}
        gap={containerQuery ? 20 : 10}
        direction={containerQuery ? 'row' : 'column'}
        justify={containerQuery ? 'center' : 'flex-start'}
        align={containerQuery ? 'center' : 'flex-start'}
      >
        <Flex
          w={containerQuery ? '40%' : '100%'}
          mt={containerQuery ? 0 : 20}
          gap={containerQuery ? 20 : 10}
          direction='row'
          justify={'flex-start'}
          align={containerQuery ? 'center' : 'flex-start'}
        >
          <Button onClick={handleStart}>
            <IconPlayerPlay size={30} />
          </Button>
          <Button onClick={handlePause}>
            <IconPlayerPause size={30} />
          </Button>
          <Button onClick={handleStop}>
            <IconPlayerStop size={30} />
          </Button>
        </Flex>
        <Ciclos />
      </Flex>
    </Flex>
  );
}

export default Timer;
