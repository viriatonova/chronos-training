import Timer from '../components/Timer';
import CreateTaskForm from '../components/Forms/CreateTaskForm';
import TaskQueue from '../components/TaskQueue';

function Home() {
  return (
    <>
      <Timer start={true} stop={false} />
      <TaskQueue />
      <CreateTaskForm />
    </>
  );
}

export default Home;
