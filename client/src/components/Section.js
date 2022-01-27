import React ,{useReducer, useEffect, useState } from 'react';
import UrlSearch from './UrlSearch';
import StatusLog from './StatusLog';
import InfiniteScrollList from './InfiniteScroll';
import { v4 as uuidv4 } from 'uuid';


import io from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_SOCKET_URL || "http://127.0.0.1:5000";

const initialState = [
  {
    "id" : "",
    "url" : "",
    "data" : {
      "Images" : [],
      "Links" : [],
      "Forms" : []
  }}
]
const apiReducer = (state, action) => {
    
    switch(action.type){
        case "FETCH" :
            return [...state,action.payload]
        default :
            return state
  }
}
const Section = () => {
    const [data, dispatch ]= useReducer(apiReducer, initialState)
    const [logData, setLogData] = useState(data[0]["data"])
    useEffect(() => {
      const socket = io(ENDPOINT,{transports: ['websocket']});
      socket.on("Crawled", data => {
        
        
        const newData = {
            id : uuidv4(), ...data
        }

        dispatch({
          type: "FETCH",
          payload: newData
        })
      });
      // CLEAN UP THE EFFECT
      return () => socket.disconnect();
    }, []);

    const displayAssets = (id) => {
        const findElement = data.filter((value) => value.id === id)
        console.log(id)
        if(findElement.length >= 0){
            setLogData(findElement[0]["data"])
        }
      } 

    return (
        <div className='App-section'>
            <div className="App-container">
                <UrlSearch/>
                <div className='asset-container'>
                    <InfiniteScrollList data={data} displayAssets={displayAssets}/>
                </div>
            </div>
            <StatusLog logData={logData}/>
        </div>
    )
};

export default Section;
