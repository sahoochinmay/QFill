import React, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "@material-ui/icons";
import { Drawer } from "@material-ui/core";
import NavBar from "../component/NavBar";
import Main from "./Main";
import ProductDetailsOne from "../component/ProductDetailsOne";
import Cart from "./Cart";
import AllDrawer from "../component/AllDrawer";
import Profile from "./Profile";
import Customize from "./Customize";
import Order from "./Order";
import CheckOut from "./CheckOut";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const [drawerState, setDrawerState] = useState(false);
  if (!isLoggedIn) {
    history.push("/");
    return <p>Please Login!</p>;
  }
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };
  return (
    <div>
      <NavBar />
      {/* section: navsecond */}
      <section id="navSecond">
        <ul className="navItem">
          <li onClick={() => setDrawerState(true)}>
            <Menu
              style={{
                fontSize: "1.8rem",
                paddingTop: "3px",
                cursor: "pointer",
              }}
            />
            All
          </li>
          <li>Sell</li>
          <li>Best Sellers</li>
          <li>Today's Deals</li>
          <li>New Release</li>
        </ul>

        <div className="rightSec">
          <h5>15% OFF HURRY UP</h5>
        </div>
      </section>

      {/*section: drawer  */}
      <Drawer open={drawerState} onClose={toggleDrawer(false)}>
        <AllDrawer toggleDrawer={toggleDrawer} />
      </Drawer>

      {/* section: second route */}
      <Switch>
        <Route exact path="/home/" component={Main} />
        <Route exact path="/home/details" component={ProductDetailsOne} />
        <Route exact path="/home/cart" component={Cart} />
        <Route exact path="/home/profile" component={Profile} />
        <Route exact path="/home/customize" component={Customize} />
        <Route exact path="/home/order" component={Order} />
        <Route exact path="/home/checkout" component={CheckOut} />
      </Switch>
      <section className="footer_inner">
        <p>
          Policies:&nbsp;&nbsp;Returns&nbsp;Policy&nbsp;|&nbsp;Terms&nbsp;of&nbsp;use&nbsp;|&nbsp;Security&nbsp;|&nbsp;Privacy&nbsp;|&nbsp;Infringement
        </p>
        <p>© 20021 QFill.com</p>
        <p>
          Need help? Visit the{" "}
          <span onClick={() => history.push("/#contact")}>Help Center</span> or
          <span onClick={() => history.push("/#contact")}>Contact Us</span>
        </p>
      </section>
    </div>
  );
};

export default Home;
