import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import map from "../assets/images/map.png";
import CartProduct from "../component/CartProduct";

const Cart = () => {
  return (
    <section id="cart">
      <Grid container justify="center" spacing={3}>
        <Grid
          item
          xs={7}
          style={{
            marginRight: "30px",
          }}
          component={Paper}
          elevation={3}
        >
          <section className="cart_top">
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "500",
              }}
            >
              My Cart(1)
            </h1>
            <section className="right_section">
              <img src={map} alt="" className="map" />
              <p>Deliver to</p>
              <select name="location" id="location_box">
                <option value="New Delhi - 110054">New Delhi - 110054</option>
                <option value="Cuttack">Cuttack - 754030</option>
              </select>
            </section>
          </section>
          <CartProduct />
          <CartProduct />
          <Button className="place_order_button">Place Order</Button>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className="price_details">
            <h1 className="title">PRICE DETAILS</h1>
            <hr />
            <p>
              Price (1 item)
              <span>₹995</span>
            </p>
            <p>
              Discount
              <span>− ₹398</span>
            </p>
            <p>
              Delivery Charges
              <span>FREE</span>
            </p>
            <hr />
            <p className="total_amount">
              Total Amount
              <span>₹597</span>
            </p>
            <hr />
            <p className="saving">You will save ₹398 on this order</p>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Cart;
