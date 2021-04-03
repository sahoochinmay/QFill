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
  return (
    <section id="navBar">
      <div id="logo">
        <img
          src={logo}
          onClick={() => history.push("/")}
          alt="e-Barnali"
          id="imglogo"
        />
      </div>
      <div class="menuItems">
        <ul>
          <li>
            <a onClick={() => history.push("/home/")}>Home</a>
          </li>
          <li>
            <a>Offers</a>
          </li>
          <li>
            <a>Seller</a>
          </li>
          <li>
            <a>Customize Order</a>
          </li>
        </ul>
        <div class="searchBox">
          <input type="search" name="" id="" placeholder="Search here..." />
          <Search className="searchIcon" />
        </div>
        <div className="cart">
          <section
            className="cartSecs"
            onClick={() => {
              isLoggedIn ? history.push("/home/cart/") : history.push("/auth/");
            }}
          >
            <ShoppingCart className="cartIcon" />
            <p className="text">Cart</p>
          </section>
          {!isLoggedIn ? (
            <section
              className="cartSecs"
              onClick={() => {
                history.push("/auth/");
              }}
            >
              <Person className="cartIcon" />
              <p className="text">LogIn</p>
            </section>
          ) : (
            <section
              class="profileSec"
              onClick={() => {
                history.push("/home/profile/");
              }}
            >
              <AccountCircle className="profileIcon" />
              <p className="username">{user?.userName}</p>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
