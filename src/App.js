import {Products} from "./components/ListItem/Products";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="App">
     {/* <h1> hello world!</h1> */}
     <Header/>
     <Products></Products>
    </div>
  );
}

export default App;
