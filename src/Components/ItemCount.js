import {useState} from "react";
import Card from 'react-bootstrap/Card';


const ItemCount = ({initialCount,stockProd}) => {

  const [count, setCount] = useState(initialCount);

  const Resta= (initialCount,count,setCount) => {
    if(count>initialCount){ 
     return(() =>setCount(prevCount => prevCount - 1))
     }
 }
 
  const Suma= (count,stockProd,setCount) => {
   if(count<stockProd){ 
    return(() =>setCount(prevCount => prevCount + 1))
   }
 }

   return (
          <div>
                     <label className="form-label ">Cantidad </label>
                     <Card.Body>{count}</Card.Body> 
                     <button className="col-3" onClick={Resta(initialCount,count,setCount)}>-</button>
                     <button className="col-3" onClick={() => setCount(initialCount)}>Reset</button>
                     <button className="col-3" onClick={Suma(count,stockProd,setCount)}>+</button>
                    <button type="button" className="btn btn-lg btn-primary col-9 ">Agregar a Carrito</button>
                    <h6><i aria-hidden="true"></i>Stock disponible {stockProd} unidades</h6>
                    </div>

    )
}

   export default ItemCount