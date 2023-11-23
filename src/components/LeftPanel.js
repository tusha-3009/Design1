import React from "react";
import "./left.css";
import Circle from "./Circle";
import Comment from "./Comment";
function LeftPanel() {
  return (
    <div className="left">
      <div>Your Result</div>
      <Circle />
   
    <Comment/>
    </div>
  );
}

export default LeftPanel;
