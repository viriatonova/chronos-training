import { Box, Flex, Title, Badge } from '@mantine/core';
import useSessions from '../../hooks/useSessions';
function TaskQueue() {
  const { sessions } = useSessions();

  return (
    <Box mt={40}>
      <Title order={1} py={20}>
        Lista de Atividades
      </Title>
      <Flex gap={10} direction='row' justify='flex-start' align='center'>
        {sessions.map(session => (
          <Badge
            key={session.id}
            color={session.color}
            variant='outline'
            size='lg'
          >
            {session.name}
          </Badge>
        ))}
      </Flex>
    </Box>
  );
}

export default TaskQueue;
