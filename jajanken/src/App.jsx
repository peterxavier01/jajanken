import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import PlayScreen from "./components/PlayScreen";
import Rules from "./components/Rules";
import RulesModal from "./components/RulesModal";
import Scoreboard from "./components/Scoreboard";
import StartScreen from "./components/StartScreen";

const App = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showPlayScreen, setShowPlayScreen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userSelection, setUserSelection] = useState([]);
  const [houseSelection, setHouseSelection] = useState([]);
  const [wins, setWins] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isInitialLoad) {
      setShowPlayScreen(false);
    }
  }, []);

  return (
    <div className="App">
      <div style={{ paddingInline: "1em" }}>
        <Scoreboard wins={wins} />
      </div>
      {isInitialLoad && (
        <StartScreen
          setUserSelection={setUserSelection}
          setShowPlayScreen={setShowPlayScreen}
          setIsInitialLoad={setIsInitialLoad}
        />
      )}
      {showPlayScreen && (
        <PlayScreen
          userSelection={userSelection}
          houseSelection={houseSelection}
          setHouseSelection={setHouseSelection}
          setShowPlayScreen={setShowPlayScreen}
          setIsInitialLoad={setIsInitialLoad}
          setWins={setWins}
        />
      )}
      {isModalOpen && <RulesModal closeModal={closeModal} />}
      <div className="rules-wrapper">
        <Rules toggleModal={toggleModal} />
      </div>
    </div>
  );
};

export default App;
