import { AiOutlineClose } from "react-icons/ai";

import RulesImg from "../assets/image-rules.svg";

import "../styles/RulesModal.css";

const RulesModal = ({ closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-title">Rules</div>
        <img src={RulesImg} alt="tictactoe-rules" />

        <div className="modal-btn" onClick={closeModal}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
