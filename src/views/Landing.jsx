import React from "react";
import logo from '../assets/images/logo.png'
import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpg'

const Landing = () => {
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

        <img src={slider1} alt="slider" id="image" />

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
              <input
                type="search"
                name=""
                id=""
                placeholder="Search Item here..."
              />
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>

            <div class="cart">
              <div class="cartSec">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                <p>Cart</p>
              </div>

              <div class="signUp">
                <i class="fa fa-user" aria-hidden="true"></i>
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
