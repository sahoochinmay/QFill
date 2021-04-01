import React from "react";
import {
  Search,
  ShoppingCart,
  Person,
  AccountCircle,
} from "@material-ui/icons";
import logo from "../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const history = useHistory();
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);
  console.log(user);
  console.log(isLoggedIn);
  return (
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
        <div className="cart">
          <section class="cartSecs">
            <ShoppingCart className="cartIcon" />
            <p className="text" >Cart</p>
          </section>
          {!isLoggedIn ? (
            <section
              class="cartSecs"
              onClick={() => {
                history.push("/auth");
              }}
            >
              <Person className="cartIcon" />
              <h3>LogIn</h3>
            </section>
          ) : (
            <section
              class="profileSec"
              onClick={() => {
                history.push("/profile");
              }}
            >
              <AccountCircle className="profileIcon" />
              <p  className="username" >{user?.userName}</p>
            </section>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
