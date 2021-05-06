import React from "react";
import Leftcard from "./Leftcard";
import Rightcard from "./Rightcard";

function Card() {
  return (
    <div className="cards">
      <Leftcard />
      <Rightcard />
    </div>
  );
}

export default Card;
