import React from 'react'
import {Search ,ShoppingCart,Person} from '@material-ui/icons'
import logo from "../assets/images/logo.png";
import {useHistory} from 'react-router-dom'

const NavBar = () => {
    const history = useHistory()
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
            <div class="cart">
              <div class="cartSecs">
                <ShoppingCart className="cartIcon" />
                <h3>Cart</h3>
              </div>
              <div
                class="cartSecs"
                onClick={() => {
                  history.push("/auth");
                }}
              >
                <Person className="cartIcon" />
                <h3>LogIn</h3>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default NavBar
