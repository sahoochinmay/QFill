import React from "react";
import {useHistory} from 'react-router-dom'

const LandingProduct = ({ data }) => {
   const history = useHistory()
    return (
    <section
      id="landing_product"
      onClick={() => {
        history.push({
          pathname: "/home/details/",
          data: data,
        });
      }}
    >
      <img src={data?.img} alt="" />
      <p className="title">{data?.title}</p>
      <p className="detail_price">
        ₹ {data?.discount}&nbsp;&nbsp;&nbsp;&nbsp;
        <strike>₹ {data?.price}</strike>
      </p>
    </section>
  );
};

export default LandingProduct;
