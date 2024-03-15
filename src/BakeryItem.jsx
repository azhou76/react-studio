import "./BakeryItem.css";

export default function BakeryItem({ name, description, price, image }) {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Description: {description}</div>
      <div>Price: {price}</div>
      <img src={image} alt="" />
    </div>
  );
}
