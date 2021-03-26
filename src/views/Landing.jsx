import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import {
  Search,
  ShoppingCart,
  Person,
  LocalShipping,
  Phone,
  Security,
  LocalOffer,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
// images
import logo from "../assets/images/logo.png";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import s2p1 from "../assets/images/s2p1.png";
import s2p2 from "../assets/images/s2p2.png";
import Footer from "../component/Footer";

const Landing = () => {
  const history = useHistory();
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
      </section>
      {/* <!--- section: Second--> */}
      <section id="second">
        <Grid container>
          <Grid item xs={3}>
            <div class="textWrapper">
              <h1>e-B@RNALI</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, et deleniti distinctio, totam, dolores voluptatibus
                maiores amet sed laborum maxime natus cumque.
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div class="imageWrapper">
              <div class="shade"></div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/BKMQLt_j_Zo?controls=0&amp;showinfo=0&amp;autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; loop=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                allow="autoplay"
              ></iframe>
              {/* <img src="images/mdbg.jpg" alt="" srcset=""> */}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div class="brandsWrapper">
              <h2>Top Products</h2>
              <div class="products">
                <div class="img1">
                  <img src={s2p1} alt="" srcset="" />
                  <h5>Pot</h5>
                </div>
                <div class="img2">
                  <img src={s2p2} alt="" srcset="" />
                  <h5>Khelana</h5>
                </div>
              </div>
              <Button className="exploreBtn">Explore More ▶</Button>
            </div>
          </Grid>
        </Grid>
      </section>
      {/* section: third */}
      <section id="third"></section>
      {/* section: fourth */}
      <section id="fourth">
        <Grid container>
          <Grid xs={3}>
            <div class="detailsWrapper">
              <LocalShipping className="secIcon" />
              <div class="rightSec">
                <p>Free Shipping</p>
                <small>For orders over Rs.499</small>
              </div>
            </div>
          </Grid>
          <Grid xs={3}>
            <div class="detailsWrapper">
              <Phone className="secIcon" />
              <div class="rightSec">
                <p>Support 24/7</p>
                <small>call us anytime</small>
              </div>
            </div>
          </Grid>
          <Grid xs={3}>
            <div class="detailsWrapper">
              <Security className="secIcon" />
              <div class="rightSec">
                <p>100% Safety</p>
                <small>only secure payments</small>
              </div>
            </div>
          </Grid>
          <Grid xs={3}>
            <div class="detailsWrapper">
              <LocalOffer className="secIcon" />
              <div class="rightSec">
                <p>Hot Offers</p>
                <small>Discounts upto 70%*</small>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
      {/* section: five */}
      <section id="fifth">
        <Grid container>
          <Grid xs={4}>
            <div class="cardWrapper">
              <p>low prices guarantee</p>
              <h3>Mega Sale</h3>
              <Button variant="contained" className="secButton">
                Shop Now
              </Button>
            </div>
          </Grid>
          <Grid xs={4}>
            <div class="cardWrapper">
              <p>power tools of next level</p>
              <h3>Wheels Rim</h3>
              <Button variant="contained" className="secButton">
                Shop Now
              </Button>
            </div>
          </Grid>
          <Grid xs={4}>
            <div class="cardWrapper">
              <p>for any vehicles</p>
              <h3>Body Parts</h3>
              <Button variant="contained" className="secButton">
                Shop Now
              </Button>
            </div>
          </Grid>
        </Grid>
      </section>
      {/* section: six */}
      <section id="sixth">
        <Grid container>
          <Grid container>
            <Grid xs={8}>
              <div class="leftFirst">
                <h3 id="blackHeading">Compy Beds</h3>

                <pre class="leftp">Lorem ipsum dolor sit amet consectetur.</pre>

                <a href="#">Explore</a>
              </div>
            </Grid>
            <Grid xs={4}>
              <div class="rightFirst">
                <h3 id="whiteHeading">Compy Beds</h3>

                <pre class="leftp">Lorem ipsum dolor sit amet consectetur.</pre>

                <a href="#">Explore</a>
              </div>
            </Grid>
          </Grid>

          <div class="row">
            <div class="col-md-4">
              <div class="leftSecond">
                <h3 id="whiteHeading">Compy Beds</h3>

                <pre class="leftp">Lorem ipsum dolor sit amet consectetur.</pre>

                <a href="#">Explore</a>
              </div>
            </div>

            <div class="col-md-8">
              <div class="rightSecond">
                <h3 id="blackHeading">Compy Beds</h3>

                <pre class="leftp">Lorem ipsum dolor sit amet consectetur.</pre>

                <a href="#">Explore</a>
              </div>
            </div>
          </div>
        </Grid>
      </section>
      {/* section: footer */}
      <Footer />
    </>
  );
};

export default Landing;
