import React from "react";
import "./cars.css"

export default function Cars(props){
    const {Name, Year, TopSpeed, HorsePower, TwoDoor, Price, Image} = props.cars
    return(
        <div id="Cars">
            <h1>{Name}</h1>
            <p>{Year}</p>
            <p>{TopSpeed}</p>
            <p>{HorsePower}</p>
            <p>{TwoDoor}</p>
            <p>{Price}</p>
            <img height = "100"  widith = "100" src={Image}></img>
        </div>
    )
}