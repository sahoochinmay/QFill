import React from 'react'

const LandingProduct = ({data}) => {
    return (
        <section id="landing_product" >
            <img src={data?.img} alt=""/>
            <p className="title">{data?.title}</p>
            <p className="detail_price">
            ₹ {data?.discount}&nbsp;&nbsp;&nbsp;&nbsp;
            <strike>₹ {data?.price}</strike>
          </p>
        </section>
    )
}

export default LandingProduct
