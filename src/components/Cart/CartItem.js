const CartItem = ({data}) => {
  return (
    <div className="checkout-modal_list-item">
    <div className="img-wrap">
     <img src={`/assets/${data.thumbnail}`} className="img-wrap" alt={data.title}></img>
     </div>
     <div className="information">
        <div>
            <h4>{data.title} </h4>
            <div className="pricing">
                <span>{data.discountedPrice}</span>
                <small>
                    <strike>{data.price}</strike>
                </small>
            </div>    
        </div>
        <div className="cart-addon cart-addon_modal">
           <button>-</button>
           <span className="counter">{data.quantity}</span>
           <button>+</button>
        </div>
     </div>
    </div>
  );

}
export default CartItem