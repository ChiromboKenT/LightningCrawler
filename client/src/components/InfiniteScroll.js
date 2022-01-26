import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import LinkCard from './LinkCard';


const InfiniteScrollList = ({data,displayAssets}) => {
    const fetchMoreData = () => {
       
    };
    
    
    return (<div className="scroll-container">
        {data.length > 1 && <InfiniteScroll
          dataLength={data.length}
          next={() => fetchMoreData()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          height={600}
        >
          {
            data.map((element) => element.id.length > 0 && <LinkCard key={element.id}
             link={element.url} id={element.id} onHandleCardClick={displayAssets}/>)  
          }
        </InfiniteScroll>}
        <div className="post-list">
            
            {/* <div className="scroll-button">
                    <h2>Load More</h2>
           </div> */}
        </div>
    </div>)
}

export default InfiniteScrollList;