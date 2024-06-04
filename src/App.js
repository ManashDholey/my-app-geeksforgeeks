import ListItem from "./components/ListItem";


const App = () => {
  return (
    <div className="App">
     {/* <h1> hello world!</h1> */}
     <ListItem data = {{
        discountedPrice:340,
        price:450,
        title: "Title of the item",
        thumbnail:"placeholder.png"
    }}
     />
      <ListItem data = {{
        discountedPrice:440,
        price:550,
        title: "Title of the item1",
        thumbnail:"placeholder.png"
    }}
     />
    </div>
  );
}

export default App;
