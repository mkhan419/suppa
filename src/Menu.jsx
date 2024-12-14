import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./Menu.css"

const Menu = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div id="menutop">
        <div style={{ flex: "1" }}>
          <h2>Soup of the Day</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
        <div id="bites">
          <h2>Small Bites</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;
