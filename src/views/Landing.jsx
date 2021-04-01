import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { LocalShipping, Phone, Security, LocalOffer } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
// images
import logo from "../assets/images/logo.png";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import s2p1 from "../assets/images/s2p1.png";
import s2p2 from "../assets/images/s2p2.png";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import LandingProduct from "../component/LandingProduct";
// data
import customize from "../utils/customize.json";
import topselling from "../utils/topselling.json";
import boxproduct from "../utils/boxproduct.json";

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
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + `...` : string;
  }
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
        <NavBar />
      </section>
      {/* <!--- section: Second--> */}
      <section id="second">
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <div class="textWrapper">
              <h1>QFill</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, et deleniti distinctio, totam, dolores voluptatibus
                maiores amet sed laborum maxime natus cumque.
              </p>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div class="imageWrapper">
              <div class="shade"></div>
              <iframe
                width="100%"
                height="355"
                src="https://www.youtube.com/embed/BKMQLt_j_Zo?controls=0&amp;showinfo=0&amp;autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; loop=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                allow="autoplay"
              ></iframe>
              {/* <img src="images/mdbg.jpg" alt="" srcset=""> */}
            </div>
          </Grid>
        </Grid>
      </section>

      {/* section: third */}
      <section id="third">
        <h1 className="heading">Top Selling</h1>
        <Grid container>
          {topselling.map((prod) => {
            return (
              <Grid item xs={4}>
                <LandingProduct data={prod} />
              </Grid>
            );
          })}
        </Grid>
      </section>
 
      {/* section: six */}
      <section id="sixth">
        <Grid container direction="row" justify="center">
          <Grid item xs={7}>
            <div class="leftFirst">
              <h3 id="blackHeading">Hamilton Nested Stools</h3>

              <pre class="leftp">
                Perfect to optimise space in the house ...
              </pre>

              <Button onClick={() => history.push("/home")} className="button">Explore</Button>
            </div>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              marginLeft: "20px",
            }}
          >
            <div class="rightFirst">
              <h3 id="whiteHeading">Table With Book Rack</h3>

              <pre class="leftp">Solidwood Study Table With Book Rack.</pre>

              <Button onClick={() => history.push("/home")} className="button">Explore</Button>
            </div>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center">
          <Grid
            item
            xs={4}
            style={{
              marginRight: "20px",
            }}
          >
            <div class="leftSecond">
              <h3 id="whiteHeading">Storage Stool</h3>

              <pre class="leftp">Dressing Table With Storage Stool.</pre>

              <Button onClick={() => history.push("/home")} className="button">Explore</Button>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div class="rightSecond">
              <h3 id="blackHeading">Retica Wall Shelf</h3>
              <pre class="leftp">Serve stunning beauty and functionality.</pre>
              <Button onClick={() => history.push("/home")} className="button">Explore</Button>
            </div>
          </Grid>
        </Grid>
      </section>

      {/* section: seven */}
      <section id="seven">
        <h1 className="title">
          If you can Imagine it? <span>We can Make it!</span>
        </h1>
        <Grid container direction="row" justify="center">
          {customize.map((data) => {
            return (
              <Grid item xs={3}>
                <section className="grid">
                  <img src={data?.img} alt="" />
                  <h1>{data?.title}</h1>
                  <p>{data?.description}</p>
                </section>
              </Grid>
            );
          })}
        </Grid>
        <Button className="button">Customize Now</Button>
      </section>

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
          {boxproduct.map((data) => {
            return (
              <Grid xs={4}>
                <div
                  class="cardWrapper"
                  style={{
                    background: `linear-gradient( to right,rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.19)),url(${data?.img[0]})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <p>{data?.msg}</p>
                  <h3>{truncate(data?.title, 18)}</h3>
                  <Button variant="contained" className="secButton">
                    Shop Now
                  </Button>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </section>
 
      {/* section: footer */}
      <Footer />
    </>
  );
};

export default Landing;
