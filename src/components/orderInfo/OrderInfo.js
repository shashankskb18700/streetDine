import FoodItem from "../foodItem/foodItem";
import { ReactComponent as Plus } from "../../assets/plus-large-svgrepo-com.svg";
import { ReactComponent as PrintKot } from "../../assets/print-svgrepo-com.svg";

import "./OrderInfo.css";
let data = require("../../data/order.json");

const OrderInfo = () => {
  return (
    <div className="orderInfo">
      <div>
        <p>Ordered Information</p>
      </div>
      <div>
        <span>Dine In</span>
        <span>Take away</span>
      </div>

      <div>
        <span>{data.orderNumber}</span>
        <span>{data.token}</span>
        <span>{data.tableNumber}</span>
      </div>

      <p className="itemtag">items</p>

      <FoodItem data={data}></FoodItem>
      <div className="extraCont">
        <span className="extra">
          <Plus></Plus>Add items
        </span>
        <span className="extra">
          <PrintKot></PrintKot>Print Kot
        </span>
        <span className="extra">
          {" "}
          <PrintKot></PrintKot>Print Invoice
        </span>
        <span className="extra">Pay later</span>
      </div>

      <p>Write instructions</p>
      <div className="text">
        <li>add extra cheez</li>
        <li>add extra cheez in pasta</li>
      </div>

      <p>Change payment option</p>
      <div className="paymentType">
        <span>Accept cash before</span>
        <span>Update order</span>
      </div>
    </div>
  );
};

export default OrderInfo;
