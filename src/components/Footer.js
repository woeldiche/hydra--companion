import React from 'react';
import Paper from 'material-ui/Paper';

const Footer = ({ children }) => (
  <Paper className="footer" zDepth={2}>
    {children}
  </Paper>
);

export default Footer;
