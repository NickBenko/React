import Item from "./Item"

const ItemList = ({items}) => {

console.log(items)

    return (
     <div className="container">
               {
               items.map((item) =>
                    <Item key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    img={item.img}
                    />
                    )}
    </div>
    )
}


export default ItemList
