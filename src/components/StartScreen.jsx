import Chip from "./Chip";

import { DRAW_TEXT, LOSE_TEXT, WIN_TEXT } from "../config";

import Paper from "../assets/icon-paper.svg";
import Rock from "../assets/icon-rock.svg";
import Scissors from "../assets/icon-scissors.svg";
import BgTriangle from "../assets/bg-triangle.svg";

import "../styles/StartScreen.css";

const StartScreen = ({
  setUserSelection,
  setShowPlayScreen,
  setIsStartScreen,
  setHouseSelection,
  setIsHouseSelected,
  setText,
  setWins,
}) => {
  const choices = [
    { choice: Paper, name: "paper", id: 1 },
    { choice: Scissors, name: "scissors", id: 2 },
    { choice: Rock, name: "rock", id: 3 },
  ];

  const handleSelection = (id) => {
    const computerSelection =
      choices[Math.floor(Math.random() * choices.length)];

    switch (id) {
      case 1:
        setUserSelection({ id: id, text: "You selected paper" });
        break;
      case 2:
        setUserSelection({ id: id, text: "You selected scissors" });
        break;
      case 3:
        setUserSelection({ id: id, text: "You selected rock" });
        break;
      default:
        setUserSelection("Invalid selection");
        break;
    }

    setTimeout(() => {
      setHouseSelection(computerSelection);
      setIsHouseSelected(true);
    }, 2000);

    if (id === computerSelection.id) {
      setText(DRAW_TEXT);
    } else if (
      (id === 3 && computerSelection.id === 2) ||
      (id === 1 && computerSelection.id === 3) ||
      (id === 2 && computerSelection.id === 1)
    ) {
      setTimeout(() => {
        setWins((prevWins) => prevWins + 1);
      }, 2500);
      setText(WIN_TEXT);
    } else {
      setTimeout(() => {
        setWins((prevWins) => prevWins - 1);
      }, 2500);
      setText(LOSE_TEXT);
    }

    setHouseSelection(null);
    setIsHouseSelected(false);
  };

  const changeScreens = () => {
    setIsStartScreen(false);
    setShowPlayScreen(true);
  };

  return (
    <div className="start-wrapper">
      <div className="start-container">
        <div className="row-one">
          {choices &&
            choices.slice(0, 2).map((choice) => (
              <Chip
                key={choice.id}
                name={choice.name}
                src={choice.choice}
                onClick={() => {
                  handleSelection(choice.id);
                  changeScreens();
                }}
              />
            ))}
        </div>
        <div className="row-two">
          <Chip
            name="rock"
            src={Rock}
            onClick={() => {
              handleSelection(3);
              changeScreens();
            }}
          />
        </div>
      </div>
      <img src={BgTriangle} className="bg-triangle" alt="background triangle" />
    </div>
  );
};

export default StartScreen;
