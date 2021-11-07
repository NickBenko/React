//import useEffect from 'react'
//import useState from 'react'
import ItemCount from "./ItemCount";


const Item = ({id,title,description,price,img,stock}) =>{

    return (
        <>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{img}</p>

            <ItemCount initialCount={1} stockProd={stock} />
      </>
    )
}

export default Item
