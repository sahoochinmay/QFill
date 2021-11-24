import React from "react";
import { Grid, Button } from "@material-ui/core";
import { LocalShipping, Phone, Security, LocalOffer } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
// images
import homegif from "../assets/gif/home.gif";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import LandingProduct from "../component/LandingProduct";
// data
import customize from "../utils/customize.json";
import topselling from "../utils/topselling.json";
import boxproduct from "../utils/boxproduct.json";

const Landing = () => {
  const history = useHistory();
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + `...` : string;
  }
  return (
    <>
      {/* section:header */}
      <section id="header">
        <NavBar />
        <div class="opa">
          <div class="headerText">
            <h2 id="caption">Your imagination</h2>

            <small> our creation.</small>

            <div class="buttonWrapper">
              <a href="##" onClick={() => history.push("/home/")}>SHOP NOW</a>
              <a href="##" id="a2">
                TRENDING NOW
              </a>
            </div>
          </div>
        </div>
        <img src={homegif} alt="slider" id="image" />
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
              {/* <iframe
                width="100%"
                height="355"
                src="https://firebasestorage.googleapis.com/v0/b/qfill-a2f0f.appspot.com/o/Space%20Saving%20Furniture%20Demonstration%20with%20Glass%20Coffee%20to%20Dining%20table.mp4?alt=media&token=a41933e2-70cb-44f8-bc63-9a80179de063"
                
              ></iframe> */}
              <video width="100%" height="325"  autoPlay muted>
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/qfill-a2f0f.appspot.com/o/Space%20Saving%20Furniture%20Demonstration%20with%20Glass%20Coffee%20to%20Dining%20table.mp4?alt=media&token=a41933e2-70cb-44f8-bc63-9a80179de063"
                  type="video/mp4"
                />
              </video>
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

              <Button onClick={() => history.push("/home")} className="button">
                Explore
              </Button>
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

              <Button onClick={() => history.push("/home")} className="button">
                Explore
              </Button>
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

              <Button onClick={() => history.push("/home")} className="button">
                Explore
              </Button>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div class="rightSecond">
              <h3 id="blackHeading">Retica Wall Shelf</h3>
              <pre class="leftp">Serve stunning beauty and functionality.</pre>
              <Button onClick={() => history.push("/home")} className="button">
                Explore
              </Button>
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
      <section id="contact"></section>
      <Footer />
    </>
  );
};

export default Landing;
