import Header from "@/components/Header";
import RushGame from "@/components/RushGame";
import { generateInitialState } from "@/lib/game/strategies/rush";

const initialGame = generateInitialState();
const RushPage = () => (
  <>
    <Header title="RUSH" />
    <RushGame initialState={initialGame} />
  </>
);
export default RushPage;
