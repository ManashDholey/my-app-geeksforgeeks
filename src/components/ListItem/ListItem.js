import AddToCartIcon from "../../assets/icons/add_cart.svg"
import {useState,useEffect} from "react"
const ListItem = ({data,updateItemTitle})=>{
    const [message,steMessage] = useState("Not added to the cart yet");
    const [counter, setCounter] = useState(0)
    const [isAddToCart,setAddToCart] = useState(true);
    
    
    const increaseCounterByOne = () => {
        // Add increasing logic
        setCounter(counter + 1);
    }

    const descreaseCounterByOne = () => {
        // Add descreasing logic
        if(counter <= 0) {
            return;
        }
        setCounter(counter - 1);
    }
    useEffect(() => {
        if(counter <= 0) {
            setAddToCart(true);
        }else{
            if(isAddToCart)
              setAddToCart(false);
        }
    }, [counter,isAddToCart])
    const handleclick = () => {
        steMessage("Added to the cart!");
        setAddToCart(false);
        console.log("Clicked");
        increaseCounterByOne();
    } 
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`../../../assets/${data.thumbnail}`} alt="some title" />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.price}</span>
                    <small>
                       <strike>₹ {data.discountedPrice}</strike>
                     </small>
                </div>
                <div className="title">
                    <h3>{data.title} </h3>
                </div>
            </div>
            <small className={"cart-message"}>{message}</small>
            <button onClick={()=>{updateItemTitle(data.id)}}>Update the Title</button>
           {isAddToCart ? <button className={"cart-add"} onClick={handleclick} >
                <span>Add to Card</span>
                <img src={AddToCartIcon} alt="add to cart"/>
            </button> : <div className={"cart-addon"}>
                <button onClick={descreaseCounterByOne}><span>-</span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>} 
        </div>
    )
}
export default ListItem