import React, { useContext, useEffect, useState } from 'react'
import './CardUser.css'
import { ThemeContext } from './ThemeContext';
import CardProduct from './CardProduct';
const FakeStore = () => {
     const [products, setProducts] = useState([])
     const {darkMode, toogleTheme} = useContext(ThemeContext);
     useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                console.log('error ', error);
            } finally {
                console.log('finally');
            }
        }
        obtenerProductos()
     },[])
    return (
        <>
        <h1>Productos</h1>
        <button onClick={toogleTheme}>Cambiar el fondo</button>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'
                style={{backgroundColor : darkMode ? 'black':'white'}}
            >
                {products.map(producto=>(
                    <CardProduct key={producto.id} props={producto} />
                ))}
            </div>
        </>
  )
}

export default FakeStore