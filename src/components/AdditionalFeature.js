import React from 'react';
// import { addFeature } from './actions/AddFeature';


const AdditionalFeature = props => {
  return (
    <li>
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
