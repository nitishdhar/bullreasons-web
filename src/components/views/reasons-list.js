import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.reasons.map(reason => {

        return (
          <div key={reason.id} className="data-list-item">
            <div className="details">
              <Link to={'/reasons/' + reason._id}>{reason.title}</Link> -  
              <span>{reason.reason}</span>
            </div>
          </div>
        );

      })}
    <button onClick={props.refreshReasons}>Refresh Reasons</button>
    <div className="total">{props.reasons.length} Reasons found</div>
    </div>
  );
}
