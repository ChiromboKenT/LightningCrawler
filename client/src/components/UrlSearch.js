import React from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const UrlSearch = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
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
