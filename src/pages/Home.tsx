import SessionForm from '../components/Forms/SessionForm.tsx';
import TaskQueue from '../components/TaskQueue';
import Ciclos from '../components/Ciclos';
import useTaskContext from '../hooks/useTaskContext';
import useContainerQuery from '../hooks/useCantainerQuery';
import Task from '../core/tasks/entities/Task.entitie.ts';

import { Button, Paper, Text, Flex } from '@mantine/core';
import {
  getNextCycle,
  getCycleType,
  formatSecondsToMinutes,
} from '../core/tasks/application/TaskState.usecase.ts';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerStop,
} from '@tabler/icons-react';

function Home() {
  const containerQuery = useContainerQuery();
  const { taskState, setTaskState } = useTaskContext();

  const nextCycle = getNextCycle(taskState.currentCycle);
  const nextTaskType = getCycleType(nextCycle);

  const handleStart = () => {
    const newTask: Task = new Task(taskState.config[nextTaskType]);
    const currentSeconds = newTask.duration * 60 || 0;

    setTaskState(prevState => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        activeTask: newTask,
        secondsRemaining: currentSeconds,
        formattedSecondsRemaining: formatSecondsToMinutes(currentSeconds),
        currentCycle: nextCycle,
        type: nextTaskType,
        config: { ...prevState.config },
      };
    });
  };

  const handlePause = () => {};
  const handleStop = () => {};

  return (
    <>
      <Flex
        direction='column'
        justify='flex-end'
        align='flex-end'
        gap={containerQuery ? 20 : 10}
      >
        <Paper w={'100%'} shadow='lg' radius='lg' withBorder>
          <Text
            w={'100%'}
            fz={{ base: 100, md: 120, lg: 140, xl: 160 }}
            fw='bold'
            ta='center'
          >
            {taskState.formattedSecondsRemaining}
          </Text>
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
      <TaskQueue />
      <SessionForm />
    </>
  );
}

export default Home;
