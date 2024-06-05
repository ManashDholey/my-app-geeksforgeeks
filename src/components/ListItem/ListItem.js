import AddToCartIcon from "../../assets/icons/add_cart.svg"
import {useState,useEffect} from "react"
import Modal from "../UI/Modal";
const ListItem = ({data,updateItemTitle,onAdd,onRemove})=>{
    const [message,steMessage] = useState("Not added to the cart yet");
    const [counter, setCounter] = useState(0)
    const [isAddToCart,setAddToCart] = useState(true);
    const [showModal, setShowModal] = useState(false);
    
    const increaseCounterByOne = (event) => {
        // Add increasing logic
        event.stopPropagation();
        setCounter(counter + 1);
        onAdd(data.id)
    }

    const decreaseCounterByOne  = (event) => {
        // Add descreasing logic
        event.stopPropagation();
        if(counter <= 0) {
            return;
        }
        if(counter == 1){
            onRemove(data.id);
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
    const handleclick = (event) => {
        steMessage("Added to the cart!");
        setAddToCart(false);
        console.log("Clicked");
        increaseCounterByOne(event);
    } 
    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }
    return (
        <>
        <div onClick={handleModal} className={"item-card"}>
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
           {isAddToCart ? <button className={"cart-add"} onClick={(event)=>{handleclick(event)}} >
                <span>Add to Card</span>
                <img src={AddToCartIcon} alt="add to cart"/>
            </button> : <div className={"cart-addon"}>
                <button onClick={(event) => {decreaseCounterByOne(event)} }><span>-</span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={(event) => {increaseCounterByOne(event)}}><span>+</span></button>
            </div>
            } 
        </div>
        { showModal && 
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{data.discountedPrice}</span>
                                <small>
                                    <strike>₹{data.price}</strike>
                                </small>
                            </div>
                            <p>{data.description}</p>
                            {
                                counter < 1 ?
                                <button className={"cart-add card-add__modal"} onClick={(event)=>{increaseCounterByOne(event)}}>
                                    <span>Add to Cart</span>
                                    <img src={AddToCartIcon} alt="Cart Icon"/>
                                </button>
                                :
                                <div className="cart-addon card-addon__modal">
                                    <button onClick={(event) => {decreaseCounterByOne(event)}}><span>-</span></button>
                                    <span>{counter}</span>
                                    <button onClick={(event) => {increaseCounterByOne(event)}}><span>+</span></button>
                                </div>
                            }
                        </div>
                    </div>
                </Modal> 
            }
     </>
    )
}
export default ListItem