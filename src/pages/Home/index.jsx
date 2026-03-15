// CSS Module
import S from './style.module.css';
// Libraries
import { useSelector } from 'react-redux';

const Home = () => {
  const isPiBrowser = useSelector((state) => state.pi.isPiBrowser);

  return (
    <main className={S.main}>
      <div>{`isPiBrowser: ${isPiBrowser}`}</div>
    </main>
  );
};

export default Home;
