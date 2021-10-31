import ItemCount from "./ItemCount";

const ItemListContainer = ({msj}) => {

    return (
        <>
        <span>{msj}</span>
        <ItemCount initialCount={1} stockProd={20}/>
        </>
    )
}

export default ItemListContainer
