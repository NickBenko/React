//import useEffect from 'react'
//import useState from 'react'

const Item = (e) =>{

    

    /*useEffect(() =>{
        setTimeout(() =>{
            setProd(item)
        },2000)
    },[])*/

    return (
        <div>
            <p>{e.title}</p>
            <p>{e.price}</p>
        </div>
    )
}

export default Item
