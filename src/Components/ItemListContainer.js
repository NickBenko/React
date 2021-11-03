//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {useEffect} from 'react';
import {useState} from 'react';
import productosJSON from "./productosJSON.json";

const ItemListContainer = () => {

  const [prod, setProd] = useState([])
  
  useEffect(() => {
    promesa
    .then((data_json) => {
      setTimeout(() => {
        setProd(data_json)
      },2000)
    })
  .catch((err) => {
    console.error(err)
  })

  },[])

  const promesa = new Promise((resolve, reject) => {
    resolve(productosJSON);
    reject(console.error());
  });

  return (<ItemList items={prod} />)

}

export default ItemListContainer;
