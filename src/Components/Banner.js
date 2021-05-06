import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotesIcon from "@material-ui/icons/Notes";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";

export default function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div
        style={{
          width: "70%",
          height: "100%",
          padding: "10px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "grey",
        }}
      >
        <div>
          <PictureInPictureIcon />
          <span className="aligner">Overview</span>
        </div>
        <div>
          <QuestionAnswerIcon />
          <span className="aligner">QnA</span>
        </div>
        <div>
          <MenuBookIcon />
          <span className="aligner">Notebook</span>
        </div>
        <div>
          <NotesIcon />
          <span className="aligner">Transcript</span>
        </div>
      </div>
    </div>
  );
}
