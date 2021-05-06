import React from "react";

function Leftcard() {
  return (
    <div className="leftCard" style={{ flex: 1 }}>
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
        INSTRUCTOR
      </h1>
      <div className="divider">
        <img
          className="circleImg"
          width="50px"
          height="50px"
          border-radius="50%"
          src="https://st2.depositphotos.com/12982378/44285/i/1600/depositphotos_442859096-stock-photo-happy-architect-smiling-crossed-arms.jpg"
          alt="bsns"
        />

        <div style={{ paddingLeft: "10px" }}>
          <h2
            style={{
              fontSize: "14px",
              textAlign: "left",
              paddingBottom: "4px",
            }}
          >
            Rodrigo Diaz
          </h2>
          <p style={{ fontSize: "12px", textAlign: "left", color: "grey" }}>
            Solution Architect, LOrem, Ipsum, enginer
          </p>
          <p style={{ fontSize: "12px", textAlign: "left", color: "grey" }}>
            Analyst, Programmer, worker
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leftcard;
