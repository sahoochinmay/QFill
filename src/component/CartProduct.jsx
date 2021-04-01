import React,{useState , useEffect} from "react";
import { Grid , Button} from "@material-ui/core";
import {useSelector , useDispatch} from 'react-redux'
import {RemoveFromCart} from '../action/cart.action'

const CartProduct = ({data}) => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.authReducer)
  const [productCount ,setProductCount] = useState(1)
  const handleRemoveProduct = () =>{
    console.log(data?._id);
    console.log(user?._id);
    dispatch(RemoveFromCart({
      uid: user?._id,
      pid: data?._id
    }))
  }
  return (
    <section id="cart_product">
      <Grid container>
        <Grid item xs={3}>
          <section className="image_section">
            <img src={data?.img[0]} className="product_img" alt="" />
            <section className="quantity_section">
              <button>-</button>
              <input type="number" value={productCount} min="1" max="9" />
              <button>+</button>
            </section>
          </section>
        </Grid>
        <Grid item xs={9}>
          <p className="title">{data?.title}</p>
          <p className="seller" >Seller:{data?.seller}</p>
          <p className="detail_price">
            ₹ {data?.discount}&nbsp;&nbsp;&nbsp;&nbsp;
            <strike>₹ {data?.price}</strike>
          </p>
          <p className="stock">Only {data?.stock} left in stock.</p>
          <Button className="remove_button" onClick={handleRemoveProduct} >Remove</Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default CartProduct;
