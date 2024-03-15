import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./BakeryItem";
import Cart from "./Cart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cost, setCost] = useState(0);
  const [items, setItems] = useState([]);

  function updateCart(price, name) {
    setCost(cost + price);
    items.push(name);
    setItems(items);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="container">
        {bakeryData.map(
          (
            item,
            index // TODO: map bakeryData to BakeryItem components
          ) => (
            <div>
              <BakeryItem
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
              <button onClick={() => updateCart(item.price, item.name)}>
                Add to Cart
              </button>
            </div>
          )
        )}
      </div>
      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <Cart totalPrice={cost} items={items} />
      </div>
    </div>
  );
}

export default App;
