import { useState } from "react";

import "./home.css";
import { ReactComponent as Dashboard } from "../../assets/dashboard-1-svgrepo-com.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Order } from "../../assets/orders.svg";
import { ReactComponent as CreateOrder } from "../../assets/createOrders.svg";
import { ReactComponent as Menu } from "../../assets/fork-and-knife.svg";
import { ReactComponent as Tables } from "../../assets/tables.svg";
import { ReactComponent as Employee } from "../../assets/employee-svgrepo-com (1).svg";
import { ReactComponent as Inventory } from "../../assets/inventory-svgrepo-com.svg";
import { ReactComponent as Kitchen } from "../../assets/fridge-svgrepo-com.svg";
import { ReactComponent as Analytics } from "../../assets/analytics-svgrepo-com (3).svg";
import { ReactComponent as Settings } from "../../assets/setting-svgrepo-com (1).svg";
import { ReactComponent as Logout } from "../../assets/logout-svgrepo-com.svg";

import OrderComponent from "../order/order";
import OrderInfo from "../orderInfo/OrderInfo";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="home">
      <div className="fixedSidebar">
        <Logo></Logo>
        <div className="">
          <li>
            <Dashboard></Dashboard>Dashboard
          </li>
          <li>
            <Order></Order>Order
          </li>
          <li>
            <CreateOrder></CreateOrder>Create Order
          </li>
          <li>
            {" "}
            <Menu></Menu>Menu
          </li>
          <li>
            <Tables></Tables>tables
          </li>
          <li>
            <Employee></Employee>Employees
          </li>
          <li>
            <Inventory></Inventory>Inventory
          </li>
          <li>
            <Kitchen></Kitchen>Kitchen Orders
          </li>
          <li>
            <Analytics></Analytics>Analytics
          </li>
          <li>
            <Settings></Settings>Settings
          </li>
          <li>
            <Logout></Logout>Logout
          </li>
        </div>
      </div>

      <div className="mainComponent">
        <p>
          <span>Dashboard</span>{" "}
          <span onClick={() => setShow(!show)} className="cart">
            cart
          </span>
        </p>
        <div className="filter">
          <span>All</span>
          <span>New Orders</span>
          <span>Dine In</span>
          <span>Take away</span>
          <span>Payments</span>
        </div>

        <div>
          <OrderComponent></OrderComponent>
        </div>
      </div>

      <div className={show ? "openingSidebar" : "closedSidebar"}>
        <OrderInfo></OrderInfo>
      </div>
    </div>
  );
};

export default Home;
