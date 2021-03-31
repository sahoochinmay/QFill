import { Grid } from "@material-ui/core";
import React from "react";
import img from "../assets/images/s2p1.png";
import offerBannerOne from "../assets/images/offerBannerOne.png";
import {
  MailOutline,
  Facebook,
  Twitter,
  Pinterest,
  FileCopyOutlined,
} from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

const ProductDetailsOne = (props) => {
  const data = props?.location?.data;
  console.log(data);
  return (
    <section id="productDetailsOne">
      <img src={offerBannerOne} className="offer_banner_one" />
      <Grid container>
        <Grid item xs={1}>
          <section className="short_image_section">
            <img src={img} className="short_image" />
            <img src={img} className="short_image" />
          </section>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <img src={img} className="large_image" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <p className="detail_title">{data?.title}</p>
          <p className="brand_name">Brand: {data?.brand}</p>
          <p className="description">{data?.description}</p>
          <p className="category">{data?.category}</p>
          <p className="detail_price">
            ₹ {data?.price}&nbsp;&nbsp;&nbsp;&nbsp;
            <strike>₹ {data?.discount}</strike>
          </p>
          <section className="ratingSection">
            <Rating
              className="rating"
              name="read-only"
              value={data?.rating}
              readOnly
            />
            <p className="count">({data?.total_rating})</p>
          </section>
          <p className="stock">Only {data?.stock} left in stock.</p>
        </Grid>
        <Grid item xs={2}>
          <section className="share_box">
            <p
              style={{
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              Share
            </p>

            <p>
              <MailOutline className="share_icon" />
            </p>
            <p>
              <Facebook
                className="share_icon"
                style={{
                  color: "#3b5998",
                }}
              />
            </p>
            <p>
              <Twitter
                className="share_icon"
                style={{
                  color: "#1DA1F2",
                }}
              />
            </p>
            <p>
              <Pinterest
                className="share_icon"
                style={{
                  color: "#E60023",
                }}
              />
            </p>
            <p>
              <FileCopyOutlined className="share_icon" />
            </p>
          </section>
        </Grid>
      </Grid>
    </section>
  );
};

export default ProductDetailsOne;
