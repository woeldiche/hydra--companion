import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

export default ({ title, children }) => (
  <div>
    <Subheader style={{ marginTop: '16px' }}>{title}</Subheader>
    <Paper
      rounded={false}
      style={{
        paddingBottom: '24px',
        paddingTop: '12px',
        marginBottom: '16px'
      }}
    >
      {children}
    </Paper>
  </div>
);
