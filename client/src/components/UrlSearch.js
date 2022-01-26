import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
const ENDPOINT = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:3001";

const UrlSearch = () => {
  const [sendState,setSendState] = useState("")
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
    if(sendState !== data.url){
      console.log(data.url)
      await axios({
        method: 'post',
        url: `${ENDPOINT}/crawl`,
        data : {
          url : data.url
        }
      })
    }
    setSendState(data.url)
  };
  let exp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  const urlRegex = new RegExp(exp)
  return <form id="form1" className="url-form" onSubmit={handleSubmit(onSubmit)}>
          <div  className="url-form--container">
          <input className="url-input" type="text" 
              defaultValue="https://google.com" {...register("url", {
                required:{
                  value: true,
                  message : "The url is a required field"
                }, pattern: {
                  value : urlRegex,
                  message : "The entered url is incorrect"
                }})} 
              placeholder='Enter url'/>
          <input type="submit" form='form1' className="url-button"/>
          </div>
      
             
      <ErrorMessage
        errors={errors}
        name="url"
        render={({ message }) => <p className='url-error'>{message}</p>}
      />
      
  </form>;
};

export default UrlSearch;
