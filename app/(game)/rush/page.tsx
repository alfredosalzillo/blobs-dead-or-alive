import { generateRound } from '@/lib/game';
import Game from '@/components/Game';
import Header from '@/components/Header';

const RushPage = () => {
  const initialGame = generateRound(0);
  return (
    <>
      <Header title="RUSH" />
      <Game initialGame={initialGame} />
    </>
  );
};
export default RushPage;
