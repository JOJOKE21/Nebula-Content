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
        "Price": "$73,995",
        "Image": "https://blogmedia.dealerfire.com/wp-content/uploads/sites/1027/2019/12/2020-Ford-Mustang-Shelby-colors_o10.png"
      },
      {
        "Name": "Dodge Charger SXT",
        "Year": "2016",
        "TopSpeed": "196 mph",
        "HorsePower": "292 hp",
        "TwoDoor": "False",
        "Price": "$30,990",
        "Image": "https://s.aolcdn.com/commerce/autodata/images/USC60DOC201B021001.jpg"
      },
      {
        "Name": "Chevrolet Camaro ZL1",
        "Year": "2019",
        "TopSpeed": "202 mph",
        "HorsePower": "650 hp",
        "TwoDoor": "Ture",
        "Price": "$62,000",
        "Image": "https://inv.assets.sincrod.com/ChromeColorMatch/us/TRANSPARENT_cc_2020CHC020062_01_1280_G7E.png"
      },
      {
        "Name": "Tesla Model 3",
        "Year": "2020",
        "TopSpeed": "162 mph",
        "HorsePower": "258 hp",
        "TwoDoor": "False",
        "Price": "$35,000",
        "Image": "https://platform.cstatic-images.com/large/in/v2/stock_photos/052b03d6-1081-46ce-8cd1-29f2908023ce/526d85f6-b2f9-49de-8473-44956a1d4033.png"
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
