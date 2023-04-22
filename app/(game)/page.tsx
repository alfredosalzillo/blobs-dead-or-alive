import Logo from '@/components/Logo';
import { generateRound } from '@/lib/game';
import Game from '@/components/Game';

const Home = () => {
  const initialGame = generateRound(0);
  return (
    <>
      <header>
        <Logo />
      </header>
      <Game initialGame={initialGame} />
    </>
  );
};
export default Home;
