import {Products} from "./components/Products";
import { Header } from "./components/Layout/Header";
import { SubHeader } from "./components/Layout/SubHeader";
import {useState} from "react";
const App = () => {
  const [cartItems, setCartItems] = useState(0);
  const onAddItem = () => {
    setCartItems(cartItems + 1);
    console.log(cartItems);
  } 
  const onRemoveItem = () => {
    setCartItems(cartItems - 1);
  }
  return (
    <div className="App">
     <Header cartItems={cartItems}/>
     <SubHeader/>
     <Products onAddItem= {onAddItem} onRemoveItem={onRemoveItem}></Products>
    </div>
  );
}

export default App;
