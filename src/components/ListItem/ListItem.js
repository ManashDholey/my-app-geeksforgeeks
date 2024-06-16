import AddToCartIcon from "../../assets/icons/add_cart.svg"
import {useState,useEffect} from "react"
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addItemHandler, removeItemHandler } from "../../actions/index"
const ListItem = ({data,updateItemTitle})=>{
    const [message,steMessage] = useState("Not added to the cart yet");
    // const [counter, setCounter] = useState(0)
   // const [isAddToCart,setAddToCart] = useState(true);
    const [showModal, setShowModal] = useState(false);
    let item = useSelector(state => state.items.find(item => item.id === data.id));
    
    if(!item)
        item ={...data};
   // console.log("item=>",item);
    const dispatch = useDispatch();
    const increaseCounterByOne = (event) => {
        // Add increasing logic
        event.stopPropagation();
        //setCounter(data.quantity + 1);
       // onAdd(item.id)
       dispatch(addItemHandler(data))
    }

    const decreaseCounterByOne  = (event) => {
        // Add descreasing logic
        event.stopPropagation();
        dispatch(removeItemHandler(data.id))
        //onRemove(item.id);
        // if(data.quantity <= 0) {
        //     return;
        // }
        // if(data.quantity == 1){
        //     onRemove(data.id);
        // }
       // setCounter(data.quantity - 1);
    }
    // useEffect(() => {
        
    //     if(item.quantity <= 0) {
    //         setAddToCart(true);
    //     }else{
    //         if(isAddToCart)
    //           setAddToCart(false);
    //     }
    // }, [item.quantity,isAddToCart])
    const handleclick = (event) => {
        steMessage("Added to the cart!");
       // setAddToCart(false);
        console.log("Clicked");
        increaseCounterByOne(event);
    } 
    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }
    return (
        <>
        <div onClick={handleModal} className={"item-card"}>
            <img className={"img-fluid"} src={`../../../assets/${item?.thumbnail}`} alt="some title" />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                <span>₹ {item?.discountedPrice}</span>
                    <small>
                       <strike>₹{item?.price}</strike>
                     </small>
                </div>
                <div className="title">
                    <h3>{item.title} </h3>
                </div>
            </div>
            <small className={"cart-message"}>{message}</small>
            <button onClick={()=>{updateItemTitle(item.id)}}>Update the Title</button>
           { !item || item.quantity < 1? <button className={"cart-add"} onClick={(event)=>{handleclick(event)}} >
                <span>Add to Card</span>
                <img src={AddToCartIcon} alt="add to cart"/>
            </button> : <div className={"cart-addon"}>
                <button onClick={(event) => {decreaseCounterByOne(event)} }><span>-</span></button>
                <span className={"counter"}>{item.quantity}</span>
                <button onClick={(event) => {increaseCounterByOne(event)}}><span>+</span></button>
            </div>
            } 
        </div>
        { showModal && 
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${item.thumbnail}`} alt={item.title}/>
                        </div>
                        <div className="meta">
                            <h3>{item?.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{item?.discountedPrice}</span>
                                <small>
                                    <strike>₹{item?.price}</strike>
                                </small>
                            </div>
                            <p>{item?.description}</p>
                            {
                               !item || item?.quantity < 1 ?
                                <button className={"cart-add card-add__modal"} onClick={(event)=>{increaseCounterByOne(event)}}>
                                    <span>Add to Cart</span>
                                    <img src={AddToCartIcon} alt="Cart Icon"/>
                                </button>
                                :
                                <div className="cart-addon card-addon__modal">
                                    <button onClick={(event) => {decreaseCounterByOne(event)}}><span>-</span></button>
                                    <span>{item.quantity}</span>
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