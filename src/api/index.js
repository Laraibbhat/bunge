import axios from 'axios';

const Api_Key = "31daf387a68deb858a7d4d52d4d10569";

const URL="http://localhost:8900";
export const getweather=(data)=>axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${Api_Key}`);

export const getHomeComponent=(path)=>axios.get(URL+path);
export const getLocation=(Latitude,Longitude)=>axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${Latitude}+${Longitude}&key=56b8b04ab2884fedb42126bc2766c2bd`)
                                                                  