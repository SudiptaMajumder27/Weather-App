import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1606367199518-5473f417e811?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21va2UlMjB3ZWF0aGVyJTIwaW4lMjBkZWxoaXxlbnwwfHwwfHx8MA%3D%3D";
     const HOT_URL ="https://images.unsplash.com/photo-1535304902304-466bec5bf8e7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90JTIwZGF5fGVufDB8fDB8fHww";
     const COLD_URL ="https://images.unsplash.com/photo-1612476176796-37ee1a146c3a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMGRheXxlbnwwfHwwfHx8MA%3D%3D";
     const RAIN_URL ="https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMGRheXxlbnwwfHwwfHx8MA%3D%3D";
    

    return (
        <div className="InfoBox">
            <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
         {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 20 ? <WbSunnyIcon />: <AcUnitIcon /> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temparature ={info.tempMin}</p>
         <p>Max Temparature ={info.tempMax}</p>
         <p>The weather feels like = {info.feelsLike}&deg;C</p>
         <p>The weather is = {info.weather}</p>
        </Typography>
      </CardContent>
    </Card> 
    </div>
        </div>
    );
}