import Header from "./Header"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import {BrowserRouter} from "react-router-dom"
import {Routes} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes exact path="/" exact component={ItemListContainer}/>
      <Routes exact path="/categorias/:id" exact component={ItemListContainer}/>
      <Routes exact path="/Item/:id" exact component={ItemDetailContainer}/>
      <ItemListContainer />
      </BrowserRouter>
    </>
    
  );
}

export default App;
