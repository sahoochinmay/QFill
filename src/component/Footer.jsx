import React from "react";
import { Grid } from "@material-ui/core";
import logo from "../assets/images/logo.png";
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  LinkedIn,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <footer id="footer">
      <Grid container>
        <Grid item xs={3}>
          <div class="companyDetails">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing e lit.
              Accusantium saepe fuga unde minima eum culpa vel atque?
            </p>
            <div class="socials">
              <Facebook className="icon" />
              <Twitter className="icon" />
              <Pinterest className="icon" />
              <Instagram className="icon" />
              <LinkedIn className="icon" />
            </div>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <div class="products">
            <ul>
              <h2>PRODUCTS</h2>

              <li>
                <a href="#">Sofa</a>
              </li>
              <li>
                <a href="#">Almirah</a>
              </li>
              <li>
                <a href="#">Beds</a>
              </li>
              <li>
                <a href="#">Furnitures</a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div class="links">
            <ul>
              <h2>USEFUL LINKS</h2>

              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Become an affiliate</a>
              </li>
              <li>
                <a href="#">Shipping Rates</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div class="contact">
            <ul>
              <h2>CONTACT</h2>
              <li>
                <a href="#">Cuttack,Odisha,India</a>
              </li>
              <li>
                <a href="#">contact@ebarnali.com</a>
              </li>
              <li>
                <a href="#">+91 63472XXXXX</a>
              </li>
              <li>
                <a href="">+91 77499XXXXX</a>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid container id="fotterBottom" >
        <Grid item xs={5} >
          <p className="copyRight" >Copyrights @ebarnali. All Rights Reserved</p>
        </Grid>
        <Grid item xs={7}>

        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
