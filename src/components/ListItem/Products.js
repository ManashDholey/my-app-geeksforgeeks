import ListItem from "./ListItem";
export const Products = () =>{
    const items = [
        {
            id: 0,
            title: "Title of this Item 1",
            price: 450,
            discountedPrice: 340,
            thumbnail: "placeholder.png"
        },
        {
            id: 1,
            title: "Title of this Item 2",
            price: 100,
            discountedPrice: 80,
            thumbnail: "placeholder.png"
        }
    ]
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
    <div className={"product-list"}>
    <div className={"product-list--wrapper"}>
        <ListItem data={items[0]}></ListItem>
        <ListItem data={items[1]}></ListItem>
    </div>
</div>
    )
}