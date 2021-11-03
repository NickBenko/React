
const Promesas =( () => {

    const promesa = new Promise((res,rej)=>{
        
        //const usuarios = [{nombres:'Juan'},{nombres:'Pedro'}]
        //const resultado = true
        setTimeout(()=>{
            res(['Juan','Pedro'])
        },2000)
        
    })

     /* return (promesa.then((usuarios)=>{
        console.log(usuarios)
        return(
            <div>
                <p>Todo bien</p>
            </div>
        )
    }))  */

    promesa.then(()=>{return (<div>
        <p>Todo bien</p>
    </div>)})
            
          
  


      /*  promesa.catch(()=>{
            return(
               <div>
                    <p>Todo mal</p>
                </div>
            )
    })*/
})

export default Promesas
