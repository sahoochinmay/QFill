import React from "react";
import { Grid, Paper, List, ListItem, Button } from "@material-ui/core";
import {
  AccountCircle,
  FormatListBulleted,
  AccountBalanceWallet,
  PowerSettingsNew,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { SignOut } from "../action/auth.action";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  return (
    <section id="profile_section">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper elevation={3} className="avatar_sec">
            <AccountCircle className="avatar" />
            <p>
              Hello,
              <br />
              <span>{user?.userName}</span>
            </p>
          </Paper>
          <Paper elevation={3} className="menu_section">
            <List>
              <ListItem className="title" button>
                <FormatListBulleted className="icon" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MY ORDERS
              </ListItem>
              <ListItem className="title" button>
                <AccountCircle className="icon" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Account Settings
              </ListItem>
              <ListItem className="title" button>
                <AccountBalanceWallet className="icon" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Payments
              </ListItem>
              <ListItem
                className="title"
                button
                onClick={() => {
                  dispatch(SignOut());
                }}
              >
                <PowerSettingsNew className="icon" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper elevation={3} className="detail_panel">
            <h1>UserName: {user?.userName} </h1>
            <p>Email: {user?.email}</p>
            <br />
            <section className="faq">
              <h1>FAQs</h1>
              <br/>
              <h2>
                What happens when I update my email address (or mobile number)?
              </h2>
              <p>
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>
              <br />
              <h2>
                When will my QFill account be updated with the new email address
                (or mobile number)?
              </h2>
              <p>
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </p>
              <br />
              <h2>
                What happens to my existing QFill account when I update my email
                address (or mobile number)?
              </h2>
              <p>
                Updating your email address (or mobile number) doesn't
                invalidate your account. Your account remains fully functional.
                You'll continue seeing your Order history, saved information and
                personal details.
              </p>
              <br />
              <h2>
                Does my Seller account get affected when I update my email
                address?
              </h2>
              <p>
                QFill has a 'single sign-on' policy. Any changes will reflect in
                your Seller account also.
              </p>
              <br />
            </section>
            <br/>
            <br/>
            <Button>Deactivate Account</Button>
            <br/>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Profile;
