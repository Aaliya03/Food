import React,{useContext} from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
// import {n1,num1} from "./Checkout"
import "../styles/Order.css";

import { MyContext } from "../Context";
const Order = (props) => {
  // const name1=useContext(n1)
  // const city1=useContext(c1)
  // const number1=useContext(num1)
  const {state} = useContext(MyContext)
  // if (!props.p1) {
  //   return <div>No data available</div>; // Handle the case when props.p1 is undefined
  // }
  return (
    <Helmet title="Order">
      <CommonSection title="Order" />
      <div className="box-container">
        <div style={{ margin: 5, padding: 5 }}>
          <div className="row">
            <div className="col md-4">
              <h3>Customer Name</h3>
              <h4>{state.name}</h4>
            </div>
            {/* <div className="col md-4">
              <h3>City</h3>
              <h4>{city1}</h4>
            </div> */}
            <div className="col md-4">
              <h3>Number</h3>
              {/* <h4>{number1}</h4> */}
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Order;
