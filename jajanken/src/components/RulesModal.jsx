import React from "react";
import "../styles/RulesModal.css";

import Paper from "../assets/icon-paper.svg";
import Scissors from "../assets/icon-scissors.svg";
import Rock from "../assets/icon-rock.svg";
import Chip from "./Chip";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";

const RulesModal = ({ closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-title">Rules</div>
        <div className="modal-content">
          <div className="row-one">
            <Chip name="paper" src={Paper} />
            <div className="arrow-left">
              <span>beats</span>
              <span>
                <AiOutlineArrowLeft />
              </span>
            </div>
            <Chip name="scissors" src={Scissors} />
          </div>

          <div className="to-rock">
            <span>beats</span>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>

          <div className="row-two">
            <Chip name="rock" src={Rock} />
          </div>

          <div className="to-scissors">
            <span>beats</span>
            <span>
              <AiOutlineArrowLeft />
            </span>
          </div>
        </div>

        <div className="modal-btn" onClick={closeModal}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
