import React, {useReducer, createContext, useEffect} from 'react';
import axios from "axios"
const ENDPOINT = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:3001";

export  const ApiContext = createContext();
const initialState = [
    {"data" : {
        "images" : [],
        "links" : [],
        "forms" : []
    }}
]

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


const ApiContextProvider = (props) => {

    
  return <ApiContext.Provider value={true} >
      {props.children}
  </ApiContext.Provider>;
};

export default ApiContextProvider;
