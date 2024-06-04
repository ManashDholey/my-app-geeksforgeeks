import ListItem from "./ListItem/ListItem";
import { useEffect, useState } from "react";
import {Form} from './Form';
import axios from "axios";
export const Products = () =>{
    // const [title, setTitle] = useState("")
    // const [price, setPrice] = useState(0)
    // const [discountedPrice, setDiscountedPrice] = useState(0)
    // const [thumbnail, setThumbnail] = useState("")
    // {
    //     id: 0,
    //     title: "Title of this Item 1",
    //     price: 450,
    //     discountedPrice: 340,
    //     thumbnail: "placeholder.png"
    // },
    // {
    //     id: 1,
    //     title: "Title of this Item 2",
    //     price: 550,
    //     discountedPrice: 440,
    //     thumbnail: "placeholder.png"
    // },
    // {
    //     id: 2,
    //     title: "Title of this Item 3",
    //     price: 650,
    //     discountedPrice: 540,
    //     thumbnail: "placeholder.png"
    // },
    // {
    //     id: 3,
    //     title: "Title of this Item 4",
    //     price: 750,
    //     discountedPrice: 540,
    //     thumbnail: "placeholder.png"
    // }
 const [items,setItems] = useState([]);
    const [item, setItem] = useState({
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
    });
useEffect(()=>{
//   const result =  fetch(`http://localhost:8000/api/v1/get-products-data`);
//   result.then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));
     fatchProductData();
},[])

async function fatchProductData(){
    try{
    const result = await axios.get(`http://localhost:8000/api/v1/get-products-data`); 
     console.log("result=>",result);
     const data = result.data.data;
     const transFormedData = data.map((item,index)=>{
        return {
            ...item,
            id: index
        }
     });
     setItems(transFormedData);
    }
    catch(err){
        console.log(err);
    }
}
const updateItemTitle = async (itemId) => {
    console.log(`Item with Id:${itemId}`);
    try{
        let title = `Update Title #Item-${itemId}`
      const result =  await axios.put(`http://localhost:8000/api/v1/update-products-data/${itemId}`, {
            title: title
        })
        console.log("result=>",result);
        let data = [...items]
        let index = data.findIndex(e => e.id === itemId)
        data[index]['title'] = title
        setItems(data)

    }catch(err){
        console.log(err);
    }
}
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
    <div className={"product-list"}>
    <div className={"product-list--wrapper"}>
      {
      items.map((item,index) => {
        return <ListItem data={item} key={item.id} updateItemTitle={updateItemTitle}/>
      })
      }
     </div>
     </div>
    )
}