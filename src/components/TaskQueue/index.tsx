import { useContext } from 'react';
import { Box, Flex, Title, Badge } from '@mantine/core';
import TaskContext from '../../contexts/TaskContext';
function TaskQueue() {
  const { taskState } = useContext(TaskContext);

  return (
    <Box mt={40}>
      <Title order={1} py={20}>
        Lista de Atividades
      </Title>
      <Flex gap={10} direction='row' justify='flex-start' align='center'>
        {taskState.tasks.map(task => (
          <Badge key={task.id} color={task.color} variant='outline' size='lg'>
            {task.name}
          </Badge>
        ))}
      </Flex>
    </Box>
  );
}

export default TaskQueue;
