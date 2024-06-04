import AddToCartIcon from "../../assets/icons/add_cart.svg"
import {useState} from "react"
const ListItem = ({data})=>{
    const [message,steMessage] = useState("Not added to the cart yet");
    const handleclick = () => {
        steMessage("Added to the cart!");
        console.log("Clicked")
    } 
    const [counter, setCounter] = useState(0)

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

    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`../../../assets/${data.thumbnail}`} alt="some title" />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                       <strike>₹ {data.price}</strike>
                     </small>
                </div>
                <div className="title">
                    <h3>{data.title} </h3>
                </div>
            </div>
            <small className={"cart-message"}>{message}</small>
            {/* <button className={"cart-add"} onClick={handleclick} >
                <span>Add to Card</span>
                <img src={AddToCartIcon} alt="add to cart"/>
            </button> */}
             <div className={"cart-addon"}>
                <button onClick={descreaseCounterByOne}><span>-</span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>
        </div>
    )
}
export default ListItem