import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <Header />
      <Navbar />

      <hr></hr>

      <div id="menutop">
        <div style={{ flex: "1" }}>
          <h1>Soup of the Day</h1>
          <p id="menus">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
        <div id="bites">
          <h1>Small Bites</h1>
          <p id="menus">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
      </div>
      <h1 id="worldly">Soup Around the World</h1>
      <div id="world" style={{ display: "flex" }}>
        <div id="latin">
          <h2>Latin America</h2>


          <h4>Chicken Tortilla Soup</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>

          <h4>Moqueca</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>

          <h4>Vori</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>

          <h4>Tacaca</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
        <div id="asian">
          <h2>Asian</h2>
          <br />
          <h4>Ramen</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
          <h4>Pho</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
          <h4>Miso Soup</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
          <h4>Spicy Wonton</h4>
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
