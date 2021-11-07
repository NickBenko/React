//import useEffect from 'react'
//import useState from 'react'

const Item = ({id,title,description,price,img}) =>{

    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{img}</p>
        </div>
    )
}

export default Item
