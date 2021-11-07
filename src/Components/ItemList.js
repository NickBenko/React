import Item from "./Item"
import Card from 'react-bootstrap/Card';

const ItemList = ({items}) => {

    return (
        <Card>
               {
               items.map((item) =>
                    <Item key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    img={item.img}
                    stock={item.stock}
                    />
                    )}
   </Card>
    )
}


export default ItemList
