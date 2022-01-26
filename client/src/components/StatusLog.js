import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const StatusLog = ({logData}) => {
  console.log(logData)
  return <div className='status-container'>
      <div className='status-window'>
        <div className='status-header'>Crawl Log</div>

        {
          Object.entries(logData).map((values) => {
            return <ul className='status-list' title='Images' key={uuidv4()}>
              <h2 className='status-name'>{values[0]}</h2>
                {
                  
                  values[1].map((value) => (
                    <li className='status-value' key={uuidv4()}>
                        {value}
                    </li>
                  ))
                }
              
            </ul>
          })
        }
        
        
      </div>
  </div>;
};

export default StatusLog;
