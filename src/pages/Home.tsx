import Timer from '../components/Timer';
import AppSettings from '../components/AppSettings';

function Home() {
  return (
    <>
      <Timer start={true} stop={false} />
      <AppSettings />
    </>
  );
}

export default Home;
