import React, { useState } from "react";
import { Search, ShoppingCart, Person } from "@material-ui/icons";
import logo from "../assets/images/logo.png";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";

const Landing = () => {
  // START: slider
  const [sliderSelect, setSliderSelect] = useState(slider1);
  const sliderArr = [slider1, slider2, slider2];
  let i = 0;
  let state = 0;
  // const selectSlider = setInterval(() => {
  //   setSliderSelect(sliderArr[i]);
  //   if (i === sliderArr.length - 1) {
  //     state = 1;
  //   } else if (i === 0 && state === 1) {
  //     state = 0;
  //   }
  //   console.log(state);
  //   state === 0 ? i++ : i--;
  //   console.log("count", i);
  // }, 3000);
  // END: slider
  return (
    <>
      {/* section:header */}
      <section id="header">
        <div class="opa">
          <div class="headerText">
            <h2 id="caption">Unique creations</h2>

            <small> For Unique Occasions</small>

            <div class="buttonWrapper">
              <a href="">SHOP NOW</a>
              <a href="" id="a2">
                TRENDING NOW
              </a>
            </div>
          </div>
        </div>

        <img src={sliderSelect} alt="slider" id="image" />

        <nav id="navBar">
          <div id="logo">
            <img src={logo} alt="e-Barnali" id="imglogo" />
          </div>
          <div class="menuItems">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Teracotta</a>
              </li>
              <li>
                <a href="#">Kandhei</a>
              </li>
              <li>
                <a href="#">Pot</a>
              </li>
              <li>
                <a href="#">Chandua</a>
              </li>
            </ul>

            <div class="searchBox">
              <input type="search" name="" id="" placeholder="Search here..." />
              <Search className="searchIcon" />
            </div>

            <div class="cart">
              <div class="cartSecs">
                <ShoppingCart className="cartIcon" />
                <p>Cart</p>
              </div>
              <div class="cartSecs">
                <Person className="cartIcon" />
                <p>account</p>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Landing;
