// components/ResourceList.js
import React from 'react';
import Resource from './Resource';

const ResourceList = ({ resources }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource, index) => (
        <Resource key={index} {...resource} />
      ))}
    </div>
  );
};

export default ResourceList;
