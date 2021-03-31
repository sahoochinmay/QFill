import React from "react";
import { Grid , Button} from "@material-ui/core";
import img from "../assets/images/s2p1.png";

const CartProduct = () => {
  return (
    <section id="cart_product">
      <Grid container>
        <Grid item xs={3}>
          <section className="image_section">
            <img src={img} className="product_img" alt="" />
            <section className="quantity_section">
              <button>-</button>
              <input type="number" min="1" max="9" />
              <button>+</button>
            </section>
          </section>
        </Grid>
        <Grid item xs={9}>
          <h1>DUKE Applique Men Polo Neck Black T-Shirt</h1>
          <h2>Seller</h2>
          <p>₹597₹995</p>
          <Button style={{
              textTransform: "none"
          }} >Remove</Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default CartProduct;
