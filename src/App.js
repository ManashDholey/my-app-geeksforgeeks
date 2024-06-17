import {Products} from "./components/Products";
import { Header } from "./components/Layout/Header";
import { SubHeader } from "./components/Layout/SubHeader";
import {BrowserRouter , Routes, Route,Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import NotFound from "./components/NotFound";
import AuthIndex from './components/Auth/AuthIndex';
import { useEffect } from "react";
import { checkIsLoggedIn } from "./actions/auth";
import { useDispatch, useSelector } from "react-redux";
 const App = () => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkIsLoggedIn(() => {}))
  }, [])
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
    // <div className="App">
    //  <Header />
    //  <SubHeader/>
    //  <Products  ></Products>
    // </div>
    <>
    <BrowserRouter>
    <nav>
      <Header/>
      <SubHeader/>
      <Outlet/>
      </nav>
       <Routes>
         {/* <Route path="/" element={<Products />} exact/> */}
         <Route path="*" element={<NotFound />} />
         <Route path="/notfound" element={<NotFound />} />
         { !authState.idToken && 
         <>
          <Route path="/login" element={<AuthIndex />} exact />
          <Route path="/signup" element={<AuthIndex />} exact />
         </>
         }
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<Navigate to="/" replace />} />
          <Route path="/:category?" element={<Products />} exact/>
       </Routes>
    </BrowserRouter>
    
  </>
  );
}

export default App;
