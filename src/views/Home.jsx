import React from "react";
import { useHistory ,BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "@material-ui/icons";
import { SignOut } from "../action/auth.action";
import NavBar from "../component/NavBar";
import ProductOne from "../component/ProductOne";
import Main from "./Main";
import ProductDetailsOne from "../component/ProductDetailsOne";
import Cart from "./Cart";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  if (!isLoggedIn) {
    history.push("/");
    return <p>Please Login!</p>;
  }
  return (
    <div>
      <NavBar />
      {/* section: navsecond */}
      <section id="navSecond">
        <ul className="navItem">
          <Menu
            style={{
              marginTop: "3px",
              fontSize: "1.8rem",
              cursor: "pointer"
            }}
          />
          <li>All</li>
          <li>Sell</li>
          <li>Best Sellers</li>
          <li>Today's Deals</li>
          <li>New Release</li>
        </ul>

        <div className="rightSec">
          <h5>15% OFF HURRY UP</h5>
        </div>
      </section>
      {/* section: second route */}
      <Router>
          <Switch>
              <Route exact path="/home/" component={Main} />
              <Route exact path="/home/details/" component={ProductDetailsOne} />
              <Route exact path="/home/cart/" component={Cart} />
          </Switch>
      </Router>
      <button
        onClick={() => {
          dispatch(SignOut());
        }}
      >
        SIgnOut
      </button>
    </div>
  );
};

export default Home;
