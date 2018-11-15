import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./navigation";
import Header from "./Header";
import Content from "./content";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <Navigation />
    <Header />
    <Content
      title="Header"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur a quo quidem expedita. Suscipit, aliquam dolorem distinctio pariatur optio ipsum corrupti sed natus nisi vero ullam! Tempore, eos ipsum.Suscipit, aliquam dolorem distinctio pariatur optio ipsum corrupti sed natus nisi vero ullam! Tempore, eos ipsum. Suscipit, aliquam dolorem distinctio pariatur optio ipsum corrupti sed natus nisi vero ullam! Tempore, eos ipsum."
    />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
