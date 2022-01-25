import React from 'react';

const UrlSearch = () => {
  return <form className="url-form">
      <input className="url-input" type="text" placeholder='Enter url'/>
      <button className="url-button">Crawl</button>
  </form>;
};

export default UrlSearch;
