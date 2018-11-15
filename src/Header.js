import React from "react";

class Header extends React.Component {
  render() {
    return (
      <body>
        <div
          style={{
            height: "300px",
            backgroundColor: "#0d0d0d",
            borderTop: "20px #0d0d0d solid"
          }}
        >
          <h1
            class="Header"
            style={{ color: "white", paddingTop: "7%", textAlign: "center" }}
          >
            DevMountain Stretch Project III
          </h1>
        </div>
      </body>
    );
  }
}

export default Header;
