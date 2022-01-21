import './App.css';
import { useState, useEffect} from "react"
import Cars from './componets/Cars/cars';
function App() {
  const[specs,setSpecs] = useState({})
  const json = `{
    "cars":[
      {
        "Name": "Ford Shelby Mustang GT500",
        "Year": "2020",
        "TopSpeed": "180 mph",
        "HorsePower": "760 hp",
        "TwoDoor": "Ture",
        "Price": "$73,995"
      },
      {
        "Name": "Dodge Charger SXT",
        "Year": "2016",
        "TopSpeed": "196 mph",
        "HorsePower": "292 hp",
        "TwoDoor": "False",
        "Price": "$30,990"
      },
      {
        "Name": "Chevrolet Camaro ZL1",
        "Year": "2019",
        "TopSpeed": "202 mph",
        "HorsePower": "650 hp",
        "TwoDoor": "Ture",
        "Price": "$62,000"
      },
      {
        "Name": "Tesla Model 3",
        "Year": "2020",
        "TopSpeed": "162 mph",
        "HorsePower": "258 hp",
        "TwoDoor": "False",
        "Price": "$35,000"
      }
    ]
  }`


  useEffect(()=>{
    const specs = JSON.parse(json);
    setSpecs(specs)
  },[])
  return (
    <div className="App">
    <div className='cars'>
      {specs.cars?.map((cars,i) => <Cars cars={cars} key={i}/>)}
    </div>

    </div>
  );
}

export default App;
