import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import offerBannerOne from "../assets/images/offerBannerOne.png";
import {
  MailOutline,
  Facebook,
  Twitter,
  Pinterest,
  FileCopyOutlined,
  ShoppingCart,
  FlashOn
} from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import {useHistory} from 'react-router-dom'

const ProductDetailsOne = (props) => {
  const history = useHistory()
  const data = props?.location?.data;
  const [selectImg, setSelectImg] = useState(data?.img[0]);
  const [descriptionLength ,setDescriptionLength] = useState(350)
  if(data === undefined){
    history.push("/home/")
  }
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + `...` : string;
  }
  return (
    <section id="productDetailsOne">
      <img src={offerBannerOne} className="offer_banner_one" />
      <Grid container>
        <Grid item xs={1}>
          <section className="short_image_section">
            {data?.img.map((url) => {
              return (
                <img
                  onClick={() => setSelectImg(url)}
                  src={url}
                  className="short_image"
                />
              );
            })}
          </section>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <img src={selectImg} className="large_image" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <p className="detail_title">{data?.title}</p>
          <p className="brand_name">Brand: {data?.brand}</p>
          <p className="description">{truncate(data?.description,descriptionLength)}</p>
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
          <section className="buttons">
            <Button className="cart_button button"> <ShoppingCart className="icon" />Add To Cart</Button>
            <Button className="buy_button button"><FlashOn className="icon" />Buy Now</Button>
          </section>
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
