import { useState, useEffect, useCallback } from "react";

import Chip from "./Chip";
import { LOSE_TEXT, WIN_TEXT } from "../config";

import Paper from "../assets/icon-paper.svg";
import Scissors from "../assets/icon-scissors.svg";
import Rock from "../assets/icon-rock.svg";

import "../styles/PlayScreen.css";

const PlayScreen = ({
  userSelection,
  houseSelection,
  setIsStartScreen,
  setShowPlayScreen,
  text,
  isHouseSelected,
}) => {
  const [selectedChip, setSelectedChip] = useState("");
  const [chipImage, setChipImage] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const goToHome = () => {
    setShowPlayScreen(false);
    setIsStartScreen(true);
  };

  const handleSelectedChip = useCallback(() => {
    if (userSelection.id === 1) {
      setSelectedChip("paper");
      setChipImage(Paper);
    } else if (userSelection.id === 2) {
      setSelectedChip("scissors");
      setChipImage(Scissors);
    } else if (userSelection.id === 3) {
      setSelectedChip("rock");
      setChipImage(Rock);
    } else {
      setSelectedChip(null);
    }
  }, []);

  useEffect(() => {
    userSelection ? handleSelectedChip() : null;
  }, [userSelection]);

  useEffect(() => {
    if (userSelection && houseSelection) {
      setShowResult(true);
    }
  }, [userSelection, houseSelection]);

  return (
    <div className="play-screen">
      <div className="play-title">
        <span>You picked</span>
        <span>The house picked</span>
      </div>
      <div className="play-chips-container">
        <div
          className={`user-selection-chip  ${
            text === WIN_TEXT ? "indicator" : ""
          }`}
        >
          <Chip name={selectedChip} src={chipImage} />
        </div>
        <div className="results-container">
          {isHouseSelected ? (
            <div className="results-wrapper">
              <p>{showResult ? text : null}</p>
              <button onClick={goToHome}>Play again</button>
            </div>
          ) : null}
        </div>
        <div
          className={`house-selection-chip-wrapper  ${
            text === LOSE_TEXT ? "indicator" : ""
          }`}
        >
          {!isHouseSelected ? (
            <div className="placeholder"></div>
          ) : (
            <div className="house-selection-chip">
              <Chip name={houseSelection.name} src={houseSelection.choice} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayScreen;
