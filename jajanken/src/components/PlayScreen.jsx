import React, { useState, useEffect, useCallback } from "react";
import "../styles/PlayScreen.css";
import Chip from "./Chip";
import Paper from "../assets/icon-paper.svg";
import Scissors from "../assets/icon-scissors.svg";
import Rock from "../assets/icon-rock.svg";

const PlayScreen = ({
  userSelection,
  houseSelection,
  setHouseSelection,
  setIsInitialLoad,
  setShowPlayScreen,
  setWins,
}) => {
  const [selectedChip, setSelectedChip] = useState("");
  const [chipImage, setChipImage] = useState([]);
  const [isHouseSelected, setIsHouseSelected] = useState(false);
  const [text, setText] = useState("");
  const [showResult, setShowResult] = useState(false);

  const goToHome = () => {
    setShowPlayScreen(false);
    setIsInitialLoad(true);
  };

  const chips = [
    { id: 1, name: "paper", src: Paper },
    { id: 2, name: "scissors", src: Scissors },
    { id: 3, name: "rock", src: Rock },
  ];

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

  const handleRandomSelection = useCallback(() => {
    const randomSelection = chips[Math.floor(Math.random() * chips.length)];
    setHouseSelection(randomSelection);
    setIsHouseSelected(true);
  }, []);

  useEffect(() => {
    handleRandomSelection();

    if (userSelection && houseSelection) {
      setShowResult(true);
      if (userSelection.id === houseSelection.id) {
        setText("You drew");
        setWins((prev) => prev + 0);
      }
      if (userSelection.id === 1 && houseSelection.id === 2) {
        setText("You lose");
        setWins((prev) => prev + 0);
      }
      if (userSelection.id === 1 && houseSelection.id === 3) {
        setText("You win");
        setWins((prev) => ++prev);
      }
      if (userSelection.id === 2 && houseSelection.id === 1) {
        setText("You win");
        setWins((prev) => ++prev);
      }
      if (userSelection.id === 2 && houseSelection.id === 3) {
        setText("You lose");
        setWins((prev) => prev + 0);
      }
      if (userSelection.id === 3 && houseSelection.id === 1) {
        setText("You lose");
        setWins((prev) => prev + 0);
      }
      if (userSelection.id === 3 && houseSelection.id === 2) {
        setText("You win");
        setWins((prev) => ++prev);
      }
    }
  }, [userSelection, houseSelection, setWins]);

  return (
    <div className="play-screen">
      <div className="play-title">
        <span>You picked</span>
        <span>The house picked</span>
      </div>
      <div className="play-chips-container">
        <div>
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
        <div>
          {!isHouseSelected ? (
            <div className="placeholder"></div>
          ) : (
            <Chip name={houseSelection.name} src={houseSelection.src} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayScreen;
