import Item from "./Item"

const ItemList = (items) => {

    return (
     <div>
               {items.map((item) =>(
                    <Item e={item}/>)
               )}
               </div>
    )
}


export default ItemList
