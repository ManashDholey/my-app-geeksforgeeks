import ListItem from "./ListItem/ListItem";
import { useState } from "react"
import {Form} from './Form'
export const Products = () =>{
    // const [title, setTitle] = useState("")
    // const [price, setPrice] = useState(0)
    // const [discountedPrice, setDiscountedPrice] = useState(0)
    // const [thumbnail, setThumbnail] = useState("")

    const [item, setItem] = useState({
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
    });

    // const handleTitle = (event) => {
    //     // console.log(event)
    //     // console.log(event.target.value)
    //  //   setTitle(event.target.value)
    //     setItem({
    //         ...item,
    //         title: event.target.value
    //     })
    // }

    // const handlePrice = event => {
    //  //   setPrice(event.target.value)
    //     setItem({
    //         ...item,
    //         price: event.target.value
    //     })
    // }

    // const handleDiscountedPrice = event => {
    //   //  setDiscountedPrice(event.target.value)
    //     setItem({
    //         ...item,
    //         discountedPrice: event.target.value
    //     })
    // }

    // const handleThumbnail = event => {
    //    // setThumbnail(event.target.value)
    //     setItem({
    //         ...item,
    //         thumbnail: event.target.value
    //     })
    // }
const handleInput = event =>{
    setItem({...item,[event.target.name]:event.target.value})
}
    const submitForm = event => {
        event.preventDefault();
        // console.log({
        //     title: title,
        //     price,
        //     discountedPrice,
        //     thumbnail
        // })
        if(item.discountedPrice > item.price) {
            alert("Discounted Price cannot be greater than price")
            return;
        }
        setItem(item);
        console.log('item is updated', item);
    }

    return (
    //     <>
    //        <ListItem data = {{
    //     discountedPrice:340,
    //     price:450,
    //     title: "Title of the item",
    //     thumbnail:"placeholder.png"
    // }}
    //  />
    //   <ListItem data = {{
    //     discountedPrice:440,
    //     price:550,
    //     title: "Title of the item1",
    //     thumbnail:"placeholder.png"
    // }}
    //  />
    //     </>
    <div className={"product-wrapper"}>
            <div className={"form"}>
               <Form  item={item} onChangeInput={handleInput} onFormSubmission={submitForm}/>
            </div>

    {/* <div className={"product-list"}>
    <div className={"product-list--wrapper"}>
        <ListItem data={items[0]}></ListItem>
        <ListItem data={items[1]}></ListItem>
    </div>
</div> */}
 <div>
                <div>
                    <ListItem data={item} />
                </div>
            </div>
</div>
    )
}