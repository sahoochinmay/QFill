import React from "react";
import slide2 from "../assets/images/s2p1.png";
import { Rating } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

const ProductOne = ({ data }) => {
  const history = useHistory();
  return (
    <section
      id="productOne"
      onClick={() =>
        history.push({
          pathname: "/home/details",
          data: data,
        })
      }
    >
      <img src={data?.img[0]} alt="" />
      <h3>{data?.title}</h3>
      <section className="ratingSection">
        <Rating
          className="rating"
          name="read-only"
          value={data?.rating}
          readOnly
        />
        <p className="count">({data?.total_rating})</p>
      </section>

      <p className="price">
        ₹{data?.price} <strike>₹{data?.discount}</strike>
      </p>
      <p className="desc">
        FREE Delivery <br />
        Only {data?.stock} left in stock.
      </p>
    </section>
  );
};

export default ProductOne;
