
const init={
    weather:null,
    weatherError:null
}

export const  weatherReducer =(state=init,action)=>{
    switch (action.type){
        case "FETCH_WEATHER_DATA":
            return {...state,weather:action.payload,weatherError:null}
            //return [action.payload]
        case "FETCH_WEATHER_DATA_ERROR":  
            return {...state,weatherError:"Enter Correct City/Country"}
        

        default:
            return state;

    }

}