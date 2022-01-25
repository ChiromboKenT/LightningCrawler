import React, { useState  } from 'react';
// styling post container


// styling container wrapper


const InfiniteScroll = () => {
    // initialize list of posts
    const [postList, setPostList] = useState({
        list: [1,2,3,4]
    }); 


    return (<div className="scroll-container">
        <div className="post-list">
            {
                postList.list.map((post, index) => {
                    return (<div key={index} 
                             className="scroll-post" 
                             >
                        <h2> {post } </h2>
                    </div>)
                })
            }
            <div className="scroll-button">
                    <h2>Load More</h2>
           </div>
        </div>
    </div>)
}

export default InfiniteScroll;