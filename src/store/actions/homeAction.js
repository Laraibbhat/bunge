import * as api from '../../api';
export const getFeature=()=> async (dispatch)=>{
   // console.log("in actions feature") 
    try {
        const {data}=await api.getHomeComponent("/feature");
        dispatch({
            type:"FETCH_FEATURE_DATA",payload:data
        });
    } catch (error) {
       console.log(error.message) ;
    }
}

export const getCashBid=()=> async (dispatch)=>{
    //console.log("in actions cash bid") 
    try {
        const {data}=await api.getHomeComponent("/cashbid");
        dispatch({
            type:"FETCH_CASHBID_DATA",payload:data
        });
    } catch (error) {
       console.log(error.message) ;
    }
}
export const getAlert=()=> async (dispatch)=>{
    try {
        const {data}=await api.getHomeComponent("/alerts");
        //console.log("alert data is",data)
        dispatch({
            type:"FETCH_ALERT_DATA",payload:data
        });
    } catch (error) {
       console.log(error.message) ;
    }
}
export const getAnnouncement=()=> async (dispatch)=>{
    try {
        const {data}=await api.getHomeComponent("/annoucements");
        dispatch({
            type:"FETCH_ANNOUNCEMENT_DATA",payload:data
        });
    } catch (error) {
       console.log(error.message) ;
    }
}

export const getCarousel=()=> async (dispatch)=>{
    try {
        const {data}=await api.getHomeComponent("/carousel");
        dispatch({
            type:"FETCH_CAROUSEL_DATA",payload:data
        });
    } catch (error) {
       console.log(error.message) ;
    }
}

export const getFuture=()=> async (dispatch)=>{
    try {
        const {data}=await api.getHomeComponent("/future");
        dispatch({
            type:"FETCH_FUTURE_DATA",payload:data
        });
    } catch (error) {
       console.log(error.message) ;
    }
}
export const getAgricultureNews=()=> async (dispatch)=>{
    try {
        const {data}=await api.getHomeComponent("/agricultureNews");
        dispatch({
            type:"FETCH_AGRICULTURE_DATA",payload:data
        });
    } catch (error) {
       console.log(error.message) ;
    }
}
 