import "./order.css";
import { ReactComponent as Box } from "../../assets/box-svgrepo-com (1).svg";
import { ReactComponent as Print } from "../../assets/print-svgrepo-com.svg";
import { ReactComponent as Profile } from "../../assets/profile-round-1342-svgrepo-com.svg";
import { ReactComponent as Employee } from "../../assets/people-svgrepo-com.svg";
const data = require("../../data/allOrders.json");

const OrderComponent = () => {
  return (
    <div className="orderComponent">
      <div className="orderDetail">
        <p className="orderIcon">{data.orderIcon}</p>

        <p className="tokenNumber">{data.tokenNumber}</p>
        <p className="serveType">{data.serveType}</p>
        <p className="orderNumber">{data.orderNumber}</p>
        <p className="paymentStatus">{data.status}</p>
      </div>

      <div className="instructions">
        <p>Instruction</p> <p>add extra cheez</p>
      </div>
      <div className="foodItems">
        <div className="foodtitle">
          <p>Item</p>
          <p>Qty</p>
          <p>Price</p>
        </div>
        {data.items.map((a) => {
          return (
            <div key={a.itemName} className="products">
              <p>{a.itemName}</p>
              <p> {a.qty}</p>
              <p> {a.price}</p>
            </div>
          );
        })}

        {/* // map all the items here */}
      </div>

      <div className="invoice">
        <p>
          <Box></Box>View items
        </p>{" "}
        <p>
          <Print></Print>Print invoixce
        </p>
      </div>
      <div className="invoice">
        <p>
          <Profile></Profile>Enter custormer info{" "}
        </p>
        <p>
          {" "}
          <Employee></Employee>Assign staff
        </p>
      </div>
      <div className="paymentOption">Payment option</div>
      <div className="paymenttype">
        <p>Accept cash before</p>
        <p>Pay later</p>
      </div>
    </div>
  );
};

export default OrderComponent;
