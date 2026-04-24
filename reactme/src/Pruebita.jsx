import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Pruebita = ()=>{
    const { darkMode, toogleTheme } = useContext(ThemeContext);
    const nombre = 'Pedro'
    let nombreMinuscula = nombre.toLocaleLowerCase()
    console.log(nombreMinuscula);
    let comidas =['🥞','🧀','🍕','🍔','🥑','🍔','🍔','🥑','🍎','🧀']
    let comidasSaludables = comidas.filter((comida)=>comida === '🧀')
    console.log(comidasSaludables)
    let comidasManzana = comidas.map((comida)=>comida+'🍎')
    console.log(comidasManzana);
    return (
        <div style={{border:'1px solid blue',backgroundColor:darkMode ? 'black' : 'white', color:darkMode ? 'white' : 'black'   }}>
            <h1 style={{color:darkMode? 'white':'black'}}>Pruebita</h1>
            <h2 style={{color: darkMode ? 'white': 'black'}}>Modo {darkMode ? 'oscuro' : 'claro'}</h2>
            <button onClick={toogleTheme}>Cambiar tema</button>
            <h3>Nombre: {nombre} </h3>
            <p>pruebita dentro de prueba</p>
            <p>{comidas}</p>
            <ul>
                {comidas.map((comida)=>{return (<li>{comida}</li>)})}
            </ul>
            <img src="./..." alt="imagen no se cargo" />
        </div>
    )
}