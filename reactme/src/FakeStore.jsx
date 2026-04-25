import React, { useContext, useEffect, useState } from 'react'
import './CardUser.css'
import { ThemeContext } from './ThemeContext';
import CardProduct from './CardProduct';
import Search from './Search';
import { Pagination } from './Pagination';
const FakeStore = () => {
     const [products, setProducts] = useState([])
     const [search, setSearch] = useState('')
     const {darkMode, toogleTheme} = useContext(ThemeContext);
     const [currentPage, setCurrentPage] = useState(1)
     // cantidad de productos por pagina
     const productsPerPage = 4   
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

     const filterProducts = products.filter(producto=>producto.title.toLowerCase().includes(search.toLowerCase()) || producto.category.toLowerCase().includes(search.toLowerCase()))
    
     // ultimo indice = pagina actual * cantidad de productos por pagina
     // Ejemplo : pagina 1 * 4 = 4
     // Ejemplo : pagina 2 * 4 = 8
     const lastIndex = currentPage * productsPerPage
     // primer indice = ultimo indice - cantidad de productos por pagina
     // Ejemplo : pagina 1 : 4 - 4 = 0
     // Ejemplo : pagina 2 : 8 - 4 = 4
     const firsIndex = lastIndex - productsPerPage
     //Cortamos el arreglo filtrado desde firstIndex hasta lastIndex
     //Ejemplo : pagina 1 : [0,4]
     //Ejemplo : pagina 2 : [4,8]
     
     const currentProducts = filterProducts.slice(firsIndex, lastIndex)
     return (
        <>
        <h1>Productos</h1>
        <button onClick={toogleTheme}>Cambiar el fondo</button>
        <Search  search={search} setSearch={setSearch}/>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'
                style={{backgroundColor : darkMode ? 'black':'white'}}
            >
                {currentProducts.map(producto=>(
                    <CardProduct key={producto.id} props={producto} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalProducts={filterProducts.length}
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
            />
        </>
  )
}

export default FakeStore