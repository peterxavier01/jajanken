import React from "react";
import Paper from "../assets/icon-paper.svg";
import Rock from "../assets/icon-rock.svg";
import Scissors from "../assets/icon-scissors.svg";
import "../styles/StartScreen.css";

const StartScreen = ({
  setUserSelection,
  setShowPlayScreen,
  setIsInitialLoad,
}) => {
  const shapes = [
    {
      shape: Paper,
      class: "paper",
      id: 1,
    },
    {
      shape: Scissors,
      class: "scissors",
      id: 2,
    },
  ];

  const handleSelection = (id) => {
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
  };

  const changeScreens = () => {
    setIsInitialLoad(false);
    setShowPlayScreen(true);
  };

  return (
    <div className="start-container">
      <div className="row-one">
        {shapes &&
          shapes.map((shape) => (
            <div
              className="shape-wrapper"
              key={shape.class}
              onClick={() => {
                handleSelection(shape.id);
                changeScreens();
              }}
            >
              <div className={`outer-circle ${shape.class}`}>
                <div className="inner-circle">
                  <img src={shape.shape} alt={shape.class} />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="row-two">
        <div
          className="shape-wrapper"
          onClick={() => {
            handleSelection(3);
            changeScreens();
          }}
        >
          <div className={`outer-circle rock`}>
            <div className="inner-circle">
              <img src={Rock} alt="rock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
