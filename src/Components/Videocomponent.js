import React from "react";
import ReactPlayer from "react-player";

function Videocomponent() {
  return (
    <div className="videoComponent">
      <ReactPlayer
        width="100%"
        height="60vh"
        controls
        url="https://www.youtube.com/watch?v=SMKPKGW083c"
      />
    </div>
  );
}

export default Videocomponent;
