const ItemListContainer = ({msj,children}) => {

    return (
        <>
        <span> El mensaje es:{msj}</span>
        {children}
        {children[0]}
        </>
    )
}

export default ItemListContainer
