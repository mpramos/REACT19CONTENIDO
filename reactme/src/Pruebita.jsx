export const Pruebita = ()=>{
    const nombre = 'Pedro'
    let nombreMinuscula = nombre.toLocaleLowerCase()
    console.log(nombreMinuscula);
    let comidas =['🥞','🧀','🍕','🍔','🥑','🍔','🍔','🥑','🍎','🧀']
    let comidasSaludables = comidas.filter((comida)=>comida === '🧀')
    console.log(comidasSaludables)
    let comidasManzana = comidas.map((comida)=>comida+'🍎')
    console.log(comidasManzana);
    return (
        <div style={{border:'1px solid blue'}}>
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