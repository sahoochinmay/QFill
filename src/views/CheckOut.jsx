import React, { useState } from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { VerifiedUser, PinDrop } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {placeOrder} from '../action/order.action'

const CheckOut = (props) => {
  const history = useHistory();
  const dispatch = useDispatch()
  let data = props?.location?.data;
  const {user} = useSelector(state => state.authReducer)
  const [totalPrice, setTotalPrice] = useState(data?.price);
  const [discountPrice, setDiscountPrice] = useState(data?.discount);
  const [productCount, setProductCount] = useState(1);
  if (data === undefined) {
    history.push("/home/");
  }
  const handleOrder = () =>{
    dispatch(placeOrder({
        uid: user?._id,
        data: data
    }))
    history.push("/home/");
  }
  return (
    <section id="checkout_sec">
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={7}
          // style={{
          //   marginRight: "30px",
          // }}
          elevation={3}
        >
          <Paper elevation={3} className="address_sec">
            <PinDrop className="icon" />
            <section>
              <h1>DELIVERY ADDRESS</h1>
              <p>
                CHINMAY RANJAN SAHOO AT/PO: CUTTACK DIST: CUTTACK PIN: 754030{" "}
              </p>
            </section>
            <Button className="change_btn">Change</Button>
          </Paper>
          <Paper elevation={3} className="order_summary">
            <h1>Order Summary</h1>
            <section id="cart_product">
              <Grid container>
                <Grid item xs={3}>
                  <section className="image_section">
                    <img src={data?.img[0]} className="product_img" alt="" />
                    <section className="quantity_section">
                      <button>-</button>
                      <input
                        type="number"
                        value={productCount}
                        min="1"
                        max="9"
                      />
                      <button>+</button>
                    </section>
                  </section>
                </Grid>
                <Grid item xs={9}>
                  <p className="title">{data?.title}</p>
                  <p className="seller">Seller:{data?.seller}</p>
                  <p className="detail_price">
                    ₹ {data?.discount}&nbsp;&nbsp;&nbsp;&nbsp;
                    <strike>₹ {data?.price}</strike>
                  </p>
                  <p className="stock">Only {data?.stock} left in stock.</p>
                </Grid>
              </Grid>
              <Button className="place_order_button" onClick={handleOrder} >Place Order</Button>
            </section>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} className="price_details">
            <h1 className="title">PRICE DETAILS</h1>
            <hr />
            <p>
              Price (1 item)
              <span>₹{totalPrice}</span>
            </p>
            <p>
              Discount
              <span>− ₹{totalPrice - discountPrice}</span>
            </p>
            <p>
              Delivery Charges
              <span>FREE</span>
            </p>
            <hr />
            <p className="total_amount">
              Total Amount
              <span>₹{discountPrice}</span>
            </p>
            <hr />
            <p className="saving">
              You will save ₹{totalPrice - discountPrice} on this order
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
    </section>
  );
};

export default CheckOut;
