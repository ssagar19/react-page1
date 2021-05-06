import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

export default function Header() {
  var navStyle = {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1e616b",
    alignItems: "center",
    height: "100%",
    color: "white",
  };
  var navLeft = {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  var h1Style = {
    fontSize: "18px",
  };
  var h2Style = {
    fontSize: "14px",
  };

  return (
    <div
      style={{
        height: "65px",
      }}
    >
      <nav style={navStyle}>
        <div>
          <h1 style={h1Style}>
            ASP Micriservices with .NET Core for Developers
          </h1>
          <h2 style={h2Style}> Communication between microservices</h2>
        </div>
        <div style={navLeft}>
          <h2 style={{ paddingRight: "15px", fontSize: "16px" }}>
            Leave a review
          </h2>
          <div style={{ paddingRight: "15px" }}>
            <ThumbUpAltIcon />
          </div>
          <div style={{ paddingRight: "15px" }}>
            <BookmarkBorderIcon />
          </div>
        </div>
      </nav>
    </div>
  );
}
