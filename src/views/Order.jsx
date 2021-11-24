import React,{useEffect} from "react";
import { Paper } from "@material-ui/core";
import { useSelector , useDispatch } from "react-redux";
import {fetchOrders} from '../action/order.action'

const Order = () => {
    const dispatch = useDispatch()
  const {user} = useSelector(state => state.authReducer)
  useEffect(() => {
    dispatch(fetchOrders(user?._id))
  }, [dispatch,user?._id])
  return (
    <section id="order_sec">
      <h1 className="heading">Your Orders</h1>
      <Paper elevation={3} className="orderProduct">

      </Paper>
    </section>
  );
};

export default Order;
