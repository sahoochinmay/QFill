import React from "react";
import slide2 from "../assets/images/s2p1.png";
import { Rating } from "@material-ui/lab";
import {useHistory} from 'react-router-dom'

const ProductOne = () => {
  return (
    <section id="productOne">
      <img src={slide2} alt="" />
      <h3>Retro Vinyl Record Coasters Funny Drink Holder Place Mat Set of 6</h3>
      <section className="ratingSection">
        <Rating className="rating" name="read-only" value="3" readOnly />
        <p className="count">(37)</p>
      </section>

      <p className="price">
        ₹1,183 <strike>₹1,395</strike>
      </p>
      <p className="desc" >
        FREE Delivery <br />
        Only 2 left in stock.
      </p>
    </section>
  );
};

export default ProductOne;
