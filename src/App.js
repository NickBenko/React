import Header from "./Header"
import ItemListContainer from "./Components/ItemListContainer"
import Counter from "./Components/Contador";


function App() {

  return (
    <>
      <Header/>
      <ItemListContainer msj="Mensaje ItemListContainer"></ItemListContainer>
      <Counter initialCount={0}/>
    </>
    
  );
}

export default App;
