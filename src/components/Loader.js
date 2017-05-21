import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loader = () => (
  <div className="flex-parent--center">
    <CircularProgress
      className
      size={100}
      thickness={10}
      style={{ margin: '0 auto' }}
    />
  </div>
);

export default Loader;
