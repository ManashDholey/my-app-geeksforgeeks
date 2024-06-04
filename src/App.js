import {Products} from "./components/Products";
import { Header } from "./components/layout/Header";
import { SubHeader } from "./components/layout/SubHeader";

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
