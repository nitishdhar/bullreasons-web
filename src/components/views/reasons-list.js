import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  const { reasons } = props;

  const mappedReasons = reasons.map(reason => {
    return (
      <div key={reason._id} className="data-list-item">
        <div className="details">
          <Link to={'/reasons/' + reason._id}>{reason.title}</Link> -
          <span>{reason.reason}</span>
        </div>
      </div>
    )
  });

  return (
    <div className="data-list">
      {mappedReasons}
      <div className="total">{reasons.length} Reasons found</div>
    </div>
  );
}
