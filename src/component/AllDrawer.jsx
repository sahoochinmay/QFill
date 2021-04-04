import React, { useState } from "react";
import { List, ListItem, Divider } from "@material-ui/core";
import { AccountCircle, Language, ExitToApp } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignOut } from "../action/auth.action";
import india from "../assets/images/india.png";

const AllDrawer = ({ toggleDrawer }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.authReducer);
  return (
    <section
      id="all_drawer"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <section className="profile">
        <AccountCircle className="icon" />
        <h1 className="text">Hello ,{user?.userName}</h1>
      </section>
      <List>
        <ListItem className="item" button>
          Trending
        </ListItem>
        <ListItem className="item" button>
          Best Sellers
        </ListItem>
        <ListItem className="item" button>
          New Releases
        </ListItem>
        <Divider />
        <ListItem className="title" button>
          Help & Settings
        </ListItem>
        <ListItem
          className="item"
          button
          onClick={() => history.push("/home/profile")}
        >
          Your Account
        </ListItem>
        <ListItem className="item" button>
          <Language />
          &nbsp;&nbsp;&nbsp; English
        </ListItem>
        <ListItem className="item" button>
          <img src={india} className="flag" />
          &nbsp;&nbsp;&nbsp; India{" "}
        </ListItem>
        <ListItem className="item" button>
          Help
        </ListItem>
        <ListItem
          className="item"
          button
          onClick={() => {
            dispatch(SignOut());
          }}
        >
          <ExitToApp />
          &nbsp;&nbsp;&nbsp;Sign Out
        </ListItem>
      </List>
    </section>
  );
};

export default AllDrawer;
