import Timer from '../components/Timer';
import TaskForm from '../components/Forms/TaskForm';
import TaskQueue from '../components/TaskQueue';

function Home() {
  return (
    <>
      <Timer start={true} stop={false} />
      <TaskQueue />
      <TaskForm />
    </>
  );
}

export default Home;
