import "./foodItem.css";

const FoodItem = ({ data }) => {
  return (
    <div className="foodItem">
      <p className="image">img</p>
      <p className="itemTitle">{data.items.name}</p>
      <p className="itemQty">{data.items.qty}</p>
      <p className="otherItem">add extra cheez</p>
      <p className="price">{data.items.price}</p>
    </div>
  );
};

export default FoodItem;
