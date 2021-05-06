import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PeopleIcon from "@material-ui/icons/People";
import InsertDriveFileSharpIcon from "@material-ui/icons/InsertDriveFileSharp";
function Leftcard() {
  return (
    <div className="leftCard" style={{ flex: 1, paddingLeft: "11px" }}>
      <h1
        style={{
          fontSize: "13px",
          color: "grey",
          textAlign: "left",
          paddingTop: "5px",
          paddingLeft: "11px",
          paddingBottom: "11px",
          fontWeight: "600",
        }}
      >
        RELATED TO COURSE
      </h1>

      <div style={{ paddingLeft: "11px" }}>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <PeopleIcon />
          <h2
            style={{
              fontSize: "13px",
              color: "black",
              textAlign: "left",
              paddingBottom: "2px",
              paddingLeft: "10px",
              fontWeight: "600",
            }}
          >
            Classroom
          </h2>
          <span>show all</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <InsertDriveFileSharpIcon />
          <h2
            style={{
              fontSize: "13px",
              color: "black",
              paddingBottom: "2px",
              textAlign: "left",
              paddingLeft: "10px",
              fontWeight: "600",
            }}
          >
            Class Files
          </h2>
          .<span>show all</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <AssignmentIcon />
          <h2
            style={{
              fontSize: "13px",
              color: "black",
              textAlign: "left",
              paddingBottom: "2px",
              paddingLeft: "10px",
              fontWeight: "600",
            }}
          >
            Certificates
          </h2>
          <span>show all</span>
        </div>
      </div>
    </div>
  );
}

export default Leftcard;
