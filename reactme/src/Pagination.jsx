export const Pagination = ({
    currentPage,
    totalProducts,
    productsPerPage,
    setCurrentPage
}) => {
    //Total de la as paginas = total de productos / productos por pagina
    //Ejemplo: 20 productos / 4 productos por pagina => 5 paginas
    const totalPages = Math.ceil(totalProducts / productsPerPage) // 2
    // Crear un arreglo con el numero todas las paginas
    // Ejemplos : totalPages 5 = [1,2,3,4,5]
    const pages = Array.from({length:totalPages}, (_,index) => index + 1)
    return (
    <div>
        {pages.map(page=>(
        <button 
            key={page} 
            onClick={()=>setCurrentPage(page)}
            className={`border px-3 py-1 rounded ${currentPage === page && 'bg-gray-500 text-white'}`}>{page}</button>))}
    </div>
  )
}