import AddToCartIcon from "../assets/icons/add_cart.svg"

const ListItem = ({data})=>{
    //const data = 
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
            <button className={"cart-add"}>
                <span>Add to Card</span>
                <img src={AddToCartIcon} alt="add to cart"/>
            </button>
        </div>
    )
}
export default ListItem