import {Products} from "./components/Products";
import { Header } from "./components/Layout/Header";
import { SubHeader } from "./components/Layout/SubHeader";
import {useState} from "react";
const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  // const [eventQueue,setEventQueue] = useState({id:"",type:""})
  // const onAddItem = (item) => {
  //   let items = [...cartItems];
  //   let index = items.findIndex(i => i.id === item.id);
  //   if(index > -1){
  //     items[index] = item;
  //   }else{
  //     items.push(item);
  //   }
  //   setCartItems([...items]);
  //   console.log(cartItems);
  // }
  // const onRemoveItem = (item) => {
  //   let items = [...cartItems];
  //   let index = items.findIndex(i => i.id === item.id);
  //   if(items[index].quantity === 0){
  //     items.splice(index,1);
  //   }else{
  //     items[index] = item;
  //   }
  //   setCartItems([...items]);
  //   //setCartItems(cartItems - 1);
  // }
  // type === -1, decrease
  // type === 1, increase
  // const handleEventQueue = (id, type) => {
  //   setEventQueue({
  //     id,
  //     type
  //   })
  // }
  return (
    <div className="App">
     <Header />
     <SubHeader/>
     <Products  ></Products>
    </div>
  );
}

export default App;
