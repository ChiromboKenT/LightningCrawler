import React, {useReducer, createContext, useEffect} from 'react';
import axios from "axios"
import io from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:3001";

export  const ApiContext = createContext();
const initialState = {
    "data" : {
        "images" : [],
        "links" : [],
        "forms" : []
    }
}

const fetchData = async (url) => {
    try{
        const results = await axios({
            baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001',
            headers: {
              "Content-type": "application/json"
            }
          });
        return results.data
    }catch(err){
        console.log(err)
    }
}
const apiReducer = (state, action) => {
    
    switch(action.type){
        case "FETCH" :
            return {...state,...action.payload}
        default :
            return state
    }
}

const ApiContextProvider = (props) => {
    
    const [apiState, dispatch ]= useReducer(apiReducer, initialState)

    useEffect(() => {
        const socket = io(ENDPOINT,{transports: ['websocket']});
        socket.on("Crawled", data => {
            console.log(data)
          dispatch({
              type: "FETCH",
              payload : data
          });
        });
        // CLEAN UP THE EFFECT
        return () => socket.disconnect();
      }, []);
    
  return <ApiContext.Provider value={apiState, dispatch}>
      {props.children}
  </ApiContext.Provider>;
};

export default ApiContextProvider;
