import React from "react";
import { Rating } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

const ProductOne = ({ data }) => {
  const history = useHistory();
  return (
    <section
      id="productOne"
      onClick={() =>
        history.push({
          pathname: "/home/details/",
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
        ₹{data?.discount} <strike>₹{data?.price}</strike>
      </p>
      <p className="desc">
        FREE Delivery <br />
        Only {data?.stock} left in stock.
      </p>
    </section>
  );
};

export default ProductOne;
