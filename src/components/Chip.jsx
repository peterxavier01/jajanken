import React from "react";
import "../styles/Chip.css";

const Chip = ({ name, src, onClick }) => {
  return (
    <div className="chip" onClick={onClick}>
      <div className="shape-wrapper">
        <div className={`outer-circle ${name}`}>
          <div className="inner-circle">
            <img src={src} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chip;
