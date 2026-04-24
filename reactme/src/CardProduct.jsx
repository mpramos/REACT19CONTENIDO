import React, { useContext } from 'react'
import './CardUser.css'
import { ThemeContext } from './ThemeContext';

const CardProduct = ({ props }) => {
    const {darkMode} = useContext(ThemeContext);
    return (
        <div
            key={props.id}
            className='border p-4 rounded-xl shadow'
            style={{ backgroundColor: darkMode ? 'black' : 'white' }}
        >
            <img
                src={props.image}
                alt={props.title}
                width="100"
                className='h-32 mx-auto object-contain'
            />
            <h3 className='text-sm font-bold mt-2'>{props.title}</h3>
            <p className='text-green-600 font-semibold'>{props.price}</p>
            <p className='text-gray-400 text-md'>{props.category}</p>
        </div>
    )
}

export default CardProduct