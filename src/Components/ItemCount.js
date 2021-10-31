import {useState} from "react";
import Card from 'react-bootstrap/Card';


const ItemCount = ({initialCount,stockProd}) => {
   const [count, setCount] = useState(initialCount);
  
   if (count < stockProd && count > initialCount ){
   return (
    onAdd({initialCount,count,setCount,stockProd})
    )
  }
  else if(count === initialCount){
    return(
      offAdd({initialCount,count,setCount,stockProd})
    )
  }
}

const onAdd = ({initialCount,count,setCount,stockProd}) => {
  
  return (
    <Card className="row">
      <div className="col-3">
                 <label className="form-label ">Cantidad </label>
                 <Card.Body>{count}</Card.Body> 
                 <button className="col-3" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                 <button className="col-3" onClick={() => setCount(initialCount)}>Reset</button>
                 <button className="col-3" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                <button type="button" className="btn btn-lg btn-primary col-9 ">Agregar a Carrito</button>
                <h6><i aria-hidden="true"></i>Stock disponible {stockProd} unidades</h6>
                </div>
    </Card>

  )
}

const offAdd = ({initialCount,count,setCount,stockProd}) => {
  
  return (
    <Card className="row">
      <div className="col-3">
                 <label className="form-label ">Cantidad </label>
                 <Card.Body>{count}</Card.Body> 
                 <button className="col-3" >-</button>
                 <button className="col-3" onClick={() => setCount(initialCount)}>Reset</button>
                 <button className="col-3" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                <button type="button" className="btn btn-lg btn-primary col-9 ">Agregar a Carrito</button>
                <h6><i aria-hidden="true"></i>Stock disponible {stockProd} unidades</h6>
                </div>
    </Card>

  )
}

export default ItemCount;

