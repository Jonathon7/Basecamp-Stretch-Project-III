import React from "react";

const Navigation = ({ siteTitle }) => (
  <div
    style={{
      background: "black",
      position: "sticky",
      top: 0
    }}
  >
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <a
        to="./"
        style={{
          margin: 0,
          color: "white",
          paddingTop: "5px",
          paddingLeft: "50px",
          textDecoration: "none"
        }}
      >
        {" "}
        <h1>DevMtn</h1>
      </a>
      <div
        style={{
          fontSize: "20px",
          margin: "22px"
        }}
      >
        <a
          to="/page-2"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "20px"
          }}
        >
          {" "}
          About{" "}
        </a>
        <a
          to="/blog"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "20px"
          }}
        >
          {" "}
          Blog{" "}
        </a>
        <a
          to="/contact"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "20px"
          }}
        >
          {" "}
          Contact{" "}
        </a>
        <a
          to="/give"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "20px"
          }}
        >
          {" "}
          Something{" "}
        </a>
      </div>
    </nav>
  </div>
);

export default Navigation;
