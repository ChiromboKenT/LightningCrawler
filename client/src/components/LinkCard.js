import React from 'react';
import { TiTick } from "react-icons/ti";
const LinkCard = ({link, onHandleCardClick, id}) => {
  return <div onClick={() => onHandleCardClick(id) }className="scroll-post">
        {
                 <TiTick className="scroll-link--icon" color="green" />
            }
        <h2 className='scroll-link'>
            
            
            <span className='scroll-link--head'>Crawled: </span>
            <span className='scroll-link--text'>{link}</span>
        </h2>
    </div>;
};

export default LinkCard;
