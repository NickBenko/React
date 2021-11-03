//import useEffect from 'react'
//import useState from 'react'

const Item = (item) => {

    

    /*useEffect(() =>{
        setTimeout(() =>{
            setProd(item)
        },2000)
    },[])*/

    return (
        <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
        </div>
    )
}

export default Item
