import React, { useEffect, useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { VerifiedUser , ShoppingCartOutlined } from "@material-ui/icons";
import map from "../assets/images/map.png";
import CartProduct from "../component/CartProduct";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import { fetchCart } from "../action/cart.action";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { user } = useSelector((state) => state.authReducer);
  const { cartProduct, reload } = useSelector((state) => state.cartReducer);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  useEffect(() => {
    dispatch(fetchCart(user?._id));
  }, [reload]);
  useEffect(() => {
    handlePriceDetail();
  }, [cartProduct]);
  const handlePriceDetail = () => {
    let tPrice = 0;
    let dPrice = 0;
    cartProduct.forEach((data) => {
      tPrice = tPrice + data?.price;
      let differ = data?.price - data?.discount;
      dPrice = dPrice + differ;
    });
    setTotalPrice(tPrice);
    setDiscountPrice(dPrice);
  };
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
              My Cart({cartProduct.length})
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

          {cartProduct.map((data) => {
            return <CartProduct data={data} />;
          })}
          {cartProduct.length === 0 ? (
            <section className="empty_section">
              <ShoppingCartOutlined className="empty" />
              <h1>Your Cart is Empty</h1>
              <Button className="shop_button" onClick={() => history.push("/home")} >Shop Now</Button>
            </section>
          ) : (
            <Button className="place_order_button">Place Order</Button>
          )}
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className="price_details">
            <h1 className="title">PRICE DETAILS</h1>
            <hr />
            <p>
              Price ({cartProduct.length} item)
              <span>₹{totalPrice}</span>
            </p>
            <p>
              Discount
              <span>− ₹{discountPrice}</span>
            </p>
            <p>
              Delivery Charges
              <span>FREE</span>
            </p>
            <hr />
            <p className="total_amount">
              Total Amount
              <span>₹{totalPrice - discountPrice}</span>
            </p>
            <hr />
            <p className="saving">
              You will save ₹{discountPrice} on this order
            </p>
          </Paper>
          <section className="security">
            <VerifiedUser className="icon" />
            <p className="secure_text">
              &nbsp;&nbsp;&nbsp;Safe and Secure Payments.Easy conversion.100%
              Authentic products.
            </p>
          </section>
        </Grid>
      </Grid>
      {/* <section className="cart_bottom">
        <p>
          Policies:&nbsp;&nbsp;Returns&nbsp;Policy&nbsp;|&nbsp;Terms&nbsp;of&nbsp;use&nbsp;|&nbsp;Security&nbsp;|&nbsp;Privacy&nbsp;|&nbsp;Infringement
        </p>
        <p>© 20021 QFill.com</p>
        <p>
          Need help? Visit the <span>Help Center</span> or
          <span>Contact Us</span>
        </p>
      </section> */}
    </section>
  );
};

export default Cart;
