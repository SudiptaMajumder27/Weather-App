import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox" 
import { useState } from "react";

export default function weatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
            city:"Wonderland",
            feelsLike: 23.89,
            humidity: 53,
            temp: 24.05,
            tempMax: 24.05,
            tempMin: 24.05,
            weather: "smoke",
        });
     let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
     }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Sudipta Majumder</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info ={weatherInfo} />
        </div>
    );
}