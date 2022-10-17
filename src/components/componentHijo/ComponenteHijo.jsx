import React from "react";


const ComponenteHijo = (props)=>{  
   
    const {age, setAge, texto } = props

    console.log("🚀 ~ file: ComponenteHijo.jsx ~ line 7 ~ ComponenteHijo ~ edad", age)

   
    return(
        <div>
            <h1>Componente Hijo</h1>
            <p></p>
            <h2>Edad: {age}</h2>
            <h1>{texto}</h1>
            <button onClick={()=> setAge(age + 1)}>Aumentar</button>
        </div>

)
       
}

export default ComponenteHijo 

