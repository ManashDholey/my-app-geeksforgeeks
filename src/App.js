import {Products} from "./components/ListItem/Products";
import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";

const App = () => {
  return (
    <div className="App">
     {/* <h1> hello world!</h1> */}
     <Header/>
     <SubHeader/>
     <Products></Products>
    </div>
  );
}

export default App;
