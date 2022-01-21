import React from "react";
import "./cars.css"

export default function Cars(props){
    const {Name, Year, TopSpeed, HorsePower, TwoDoor, Price} = props.cars
    return(
        <div id="Cars">
            <h1>{Name}</h1>
            <p>{Year}</p>
            <p>{TopSpeed}</p>
            <p>{HorsePower}</p>
            <p>{TwoDoor}</p>
            <p>{Price}</p>
        </div>
    )
}