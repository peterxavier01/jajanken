import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import PlayScreen from "./components/PlayScreen";
import Rules from "./components/Rules";
import RulesModal from "./components/RulesModal";
import Scoreboard from "./components/Scoreboard";
import StartScreen from "./components/StartScreen";

const App = () => {
  const [isStartScreen, setIsStartScreen] = useState(true);
  const [showPlayScreen, setShowPlayScreen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wins, setWins] = useState(0);
  const [userSelection, setUserSelection] = useState([]);
  const [houseSelection, setHouseSelection] = useState([]);
  const [isHouseSelected, setIsHouseSelected] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (wins <= 0) setWins(0);
  }, [wins, setWins]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isStartScreen) {
      setShowPlayScreen(false);
    }
  }, [isStartScreen, setShowPlayScreen]);

  return (
    <div className="App">
      <div style={{ paddingInline: "1em" }}>
        <Scoreboard wins={wins} />
      </div>
      {isStartScreen && (
        <StartScreen
          setUserSelection={setUserSelection}
          setShowPlayScreen={setShowPlayScreen}
          setIsStartScreen={setIsStartScreen}
          setHouseSelection={setHouseSelection}
          wins={wins}
          setWins={setWins}
          setIsHouseSelected={setIsHouseSelected}
          setText={setText}
        />
      )}
      {showPlayScreen && (
        <PlayScreen
          userSelection={userSelection}
          houseSelection={houseSelection}
          setShowPlayScreen={setShowPlayScreen}
          setIsStartScreen={setIsStartScreen}
          text={text}
          isHouseSelected={isHouseSelected}
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
