import React, { useEffect, useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import map from "../assets/images/map.png";
import CartProduct from "../component/CartProduct";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../action/cart.action";

const Cart = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const { cartProduct, reload } = useSelector((state) => state.cartReducer);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0)
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
      console.log(data?.price);
      tPrice = tPrice + data?.price;
      let differ = data?.price - data?.discount
      dPrice = dPrice + differ;
    });
    setTotalPrice(tPrice);
    setDiscountPrice(dPrice)
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
              <h1>No product added in the cart</h1>
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
            <p className="saving">You will save ₹{discountPrice} on this order</p>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Cart;
