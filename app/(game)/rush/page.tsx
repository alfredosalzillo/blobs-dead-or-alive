import Header from '@/components/Header';
import { generateInitialState } from '@/lib/game/strategies/rush';
import RushGame from '@/components/RushGame';

const initialGame = generateInitialState();
const RushPage = () => (
  <>
    <Header title="RUSH" />
    <RushGame
      initialState={initialGame}
    />
  </>
);
export default RushPage;
