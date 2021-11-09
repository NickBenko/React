import ItemDetail from "./ItemDetail";
import {useParams} from "react-router";
import {useEffect} from 'react';
import {useState} from 'react';


const ItemDetailContainer = () => {

    const{id} = useParams()
    console.log(id)

    let prodFiltrado
    const [single, setSingle] = useState([])

    if (id){
     prodFiltrado = single.filter(item => item.id == id)
    }
    else{
        console.log("no funciono")
    }

    console.log(prodFiltrado)

  
  
 useEffect(() => {
    setTimeout(() => {  
      promesa
    .then((prodSingle) => {
        setSingle(prodSingle)
     })
     .catch((err) => {
      console.error(err)
    })
   },2000)
 },[])

 const promesa = new Promise((resolve, reject) => {
  resolve(prodFiltrado);
  reject(console.error());
});

 
  return (
      <li>
  <ItemDetail single={single} />
  </li>
 )

}

export default ItemDetailContainer;
