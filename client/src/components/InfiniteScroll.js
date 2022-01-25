import React, { useState  } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
// styling post container


// styling container wrapper


const InfiniteScrollList = () => {
    // initialize list of posts
    const [postList, setPostList] = useState([...Array.from({ length: 5 })]);
    const dataLength = postList.length 
    const fetchMoreData = () => {
       
      }; 


    return (<div className="scroll-container">
        <InfiniteScroll
          dataLength={dataLength}
          next={() => fetchMoreData()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          height={600}
        >
          {
            postList.map((post, index) => {
                return (<div key={index} 
                            className="scroll-post" 
                            >
                    <h2> {post } </h2>
                </div>)
            })
            }
        </InfiniteScroll>
        <div className="post-list">
            
            <div className="scroll-button">
                    <h2>Load More</h2>
           </div>
        </div>
    </div>)
}

export default InfiniteScrollList;