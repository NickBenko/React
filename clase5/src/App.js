import Header from "./Header"
import ItemListContainer from "./Components/ItemListContainer"
import {useState} from "react";
import {Mostrar} from "./funciones";
import {Mostrar2} from "./funciones";

function App() {

 

  //const resultado = useState("hola");
  //const estado = resultado[0];
  //const setEstado = resultado[1];

  const [estado,setEstado] = useState("Hola")


   //let contador = 0;

  const Contador = () =>{
    // contador = contador + 1;
   //  console.log(contador);
   setEstado("chau");
   }



  return (
    <>
    <button onClick={Mostrar}>click</button>
    <button onClick={Mostrar2}>click2</button>

    <button onClick={Contador}>click3</button>
    <p>{estado}</p>

      <Header/>
      <ItemListContainer
      msj="Funciono correctamente">
        <p>que onda seee</p>
        <p>Segundo que onda seee</p>
      </ItemListContainer>
    </>
    
  );
}

export default App;
