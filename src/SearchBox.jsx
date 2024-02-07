import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo}) {
    let [city, setCity]=useState("");
    let [error, setError]=useState(false);
    const API_URL= "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "d4522b58e477d951c091f19102dffa24";

    let getweatherInfo = async () =>{
        try {
       let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse =  await response.json();
     
      let result= {
        city:city,
        temp :jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    }catch(err) {
        throw err;
    }

};

let handleChange= (evt) =>{
    setCity(evt.target.value);
};

let handleSubmit = async (evt) =>{
    try {
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await getweatherInfo();
    updateInfo(newinfo);
  } catch(err) {
    setError(true);
  }
};

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField
             id="City" 
             label="City Name"
              variant="outlined" 
              required value={city}
              onChange={handleChange}
            />
            <br></br>  <br></br>
            <Button variant="contained" type="submit">Search </Button>
            {error && <p style= {{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}