
import ItemList from "./ItemList";
import {useEffect} from 'react';
import {useState} from 'react';
import productosJSON from "./productosJSON.json";





const ItemListContainer = () => {



  const [prod, setProd] = useState([])
  
 useEffect(() => {
    setTimeout(() => {  
      promesa
    .then((data_json) => {
        setProd(data_json)
     })
     .catch((err) => {
      console.error(err)
    })
   },2000)
 },[])

 const promesa = new Promise((resolve, reject) => {
  resolve(productosJSON);
  reject(console.error());
});

 
  return (
    <>
  <ItemList items={prod} />
 
  </>)




}

export default ItemListContainer;
