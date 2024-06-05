import {Products} from "./components/Products";
import { Header } from "./components/Layout/Header";
import { SubHeader } from "./components/Layout/SubHeader";

const App = () => {
  return (
    <div className="App">
     <Header/>
     <SubHeader/>
     <Products></Products>
    </div>
  );
}

export default App;
