import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your Details.
      </Typography>
      <Typography variant="subtitle1">
        Your Profile is Created. We have emailed your confirmation.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
