import Logo from "../assets/logo.svg";

import "../styles/Scoreboard.css";

const Scoreboard = ({ wins }) => {
  return (
    <div className="scoreboard">
      <div className="title">
        <img src={Logo} alt="logo" />
      </div>
      <div className="score">
        <span>score</span>
        <span>{wins}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
