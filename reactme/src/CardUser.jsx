import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const CardUser=()=>{
    const {darkMode, toogleTheme} = useContext(ThemeContext);
    const users = [
        {nombre:'Pedro', edad:45, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Maria', edad:45, foto:'https://as1.ftcdn.net/v2/jpg/00/52/52/90/1000_F_52529013_M9IU2a1qEBedkbBPF44aq1cn5q47ZYrm.jpg'},
        {nombre:'Juan', edad:45, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Esteban', edad:45, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Eduardo', edad:45, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Alan', edad:35, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Alan', edad:35, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Alan', edad:35, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Alan', edad:35, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Alan', edad:35, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Alan', edad:35, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
        {nombre:'Alan', edad:35, foto:'https://thumbs.dreamstime.com/z/portrait-normal-young-man-grey-background-smiling-studio-looking-camera-31384281.jpg?w=576'},
    ]
    return(
        <>
        { users.map((user)=>{ return (
            <div style={{border:'1px solid black', backgroundColor:darkMode ? 'black' : 'white', color:darkMode ? 'white' : 'black'}}>
                <h1 style={{color:darkMode ? 'white':'black' }}>Nombre de Usuario:{user.nombre}</h1>
                <h3>Edad de Usuario:{user.edad}</h3>
                <img style={{height:'200px', width:'200px', borderRadius:'50%'}} src={user.foto}/>
            </div>
        )})}
        </>
    )
}