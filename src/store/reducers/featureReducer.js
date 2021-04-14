
const initState={
    features:null,
    cashBidData:null,
    alert:null,
    announcement:null,
    location:null,
    carousel:null,
    future:null,
    agriculture:null
}
 
export const  featureReducer =(state=initState,action)=>{ 
    switch (action.type){
        case "FETCH_FEATURE_DATA":
            //featureData=action.payload;
            return {...state,features:action.payload}
        case "FETCH_CASHBID_DATA":
            //cashBidData=action.payload;
            return {...state ,cashBidData:action.payload}
        case "FETCH_ALERT_DATA":
            //cashBidData=action.payload;
            return {...state ,alert:action.payload}
        case "FETCH_ANNOUNCEMENT_DATA":
            //cashBidData=action.payload;
            return {...state ,announcement:action.payload}
        case "FETCH_LOCATION_DATA":
            //cashBidData=action.payload;
            return {...state ,location:action.payload}
        case "FETCH_CAROUSEL_DATA":
            //cashBidData=action.payload;
            return {...state ,carousel:action.payload}
        case "FETCH_FUTURE_DATA":
            //cashBidData=action.payload;
            return {...state ,future:action.payload}
        case "FETCH_AGRICULTURE_DATA":
            //cashBidData=action.payload;
            return {...state ,agriculture:action.payload}


        default:
            return state;

    }

}