import React from "react";
import { RiChatSmile2Line } from "react-icons/ri";
import { LiaBrainSolid } from "react-icons/lia";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./right.css";
function RightPanel() {
  return (
    <div className="right">
      <div className="summary">
        <b>Summary </b>
      </div>
      <div className="abc">
        <div className="reaction">
          <BsLightningCharge color="red" fontSize="20px" />
          <p>Reaction</p>
          <span>
            <b>{"80"}</b>/100
          </span>
        </div>
        <div className="memory">
          <LiaBrainSolid color="orange" fontSize="20px" />
          <p>Memory</p>
          <span>
            <b>{"80"}</b>/100
          </span>
        </div>
        <div className="verbal">
          <RiChatSmile2Line color="green" fontSize="20px" />
          <p>Verbal</p>
          <span>
            <b>{"80"}</b>/100
          </span>
        </div>
        <div className="visual">
          <MdOutlineRemoveRedEye color="blue" fontSize="20px" />
          <p>Visual</p>
          <span>
            <b>{"80"}</b>/100
          </span>
        </div>
      </div>
      <button>Continue</button>
    </div>
  );
}

export default RightPanel;
