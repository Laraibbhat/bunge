import * as api from '../../api';

const weatherIcon = {
      Thunderstorm: "fa fa-bolt",
      Drizzle: "fa fa-tint",
      Rain: "fa fa-tint",
      Snow: "fa fa-snowflake-o",
      Atmosphere: "fa fa-sun-o",
      Clear: "fa fa-sun-o",
      Clouds: "fa fa-cloud"
    };

const get_WeatherIcon=(icons, rangeId)=> {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        return (icons.Thunderstorm)
        
      case rangeId >= 300 && rangeId <= 321:
       return (icons.Drizzle)
       
      case rangeId >= 500 && rangeId <= 521:
         
        return(icons.Rain)
      
      case rangeId >= 600 && rangeId <= 622:
          
        return(icons.Snow)
       
      case rangeId >= 701 && rangeId <= 781:
          
        return (icons.Atmosphere)
    
      case rangeId === 800:
          
        return(icons.Clear)
      case rangeId >= 801 && rangeId <= 804:
          
       return (icons.Clouds)
      default:
          
        return (icons.Clouds)
    }
  }

const formateDate=(unix_timestamp)=>{ 
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
  }

const weatherData={city:"Srinagar ",
country:" In",
temp_max:"27",
temp_min:"10",
description:"Clear",
sunrise:"6:16:45",
sunset:"18:51:34",
feelslike:"29",
barom:"25",
humidity:"15",
icon:""} 

 const calCelsius=(temp) =>{
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

    const handleData=(data)=>{
        //console.log("data in handle data in action",data)
        weatherData.city=data.name
        weatherData.country=data.sys.country
        weatherData.temp_max=calCelsius(data.main.temp_max)
        weatherData.temp_min=calCelsius(data.main.temp_min)
        weatherData.description=data.weather[0].description
        weatherData.sunrise=formateDate( data.sys.sunrise )
        weatherData.sunset=formateDate( data.sys.sunset )
        weatherData.feelslike=calCelsius(data.main.feels_like)
        weatherData.barom=data.main.pressure;
        weatherData.humidity=data.main.humidity
        weatherData.icon=get_WeatherIcon(weatherIcon, data.weather[0].id)

    }

export const getWeatherData=(data1)=> async (dispatch)=>{
    try {
        const {data}=await api.getweather(data1);
        handleData(data)
        dispatch({
            type:"FETCH_WEATHER_DATA",payload:weatherData
        });
    } catch (error) {dispatch({
            type:"FETCH_WEATHER_DATA_ERROR",payload:error.message
        });
    }
}

function getPosition() {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

export const currentWeather=()=> async (dispatch)=>{
    try {
          const {coords} = await getPosition();
          console.log(coords.latitude,coords.longitude)
          let {data}= await api.getLocation(coords.latitude,coords.longitude);
          const location_data={
                city:data.results[0].components.state_district.split(" ")[0],
                country:data.results[0].components.country
          }
          dispatch(getWeatherData(location_data))
    } catch (error) {
       console.log(error.message) ;
    }
}