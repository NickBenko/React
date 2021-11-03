import {useState} from 'react'
import {useEffect} from 'react'

const Efecto = () => {

    const [cont,setCont]=useState(0);
   //useEffect(funcion,array)
   
   useEffect(()=>{
       //Efecto secundario (Ej: pedido de datos)
       alert('Soy efecto secundario');
},[a,b]) //cuando cambia alguna variable del array el efecto se vuelve a ejecutar
}

export default Efecto
