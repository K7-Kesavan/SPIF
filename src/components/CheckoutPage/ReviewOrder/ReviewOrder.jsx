import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';
import ProductDetails from './ProductDetails';
import ShippingDetails from './ShippingDetails';
import PaymentDetails from './PaymentDetails';

export default function ReviewOrder(props) {
  
  let {formInitialValues} = props ;
  // const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Profile summary
      </Typography>
      {/* <ProductDetails /> */}
      {/* <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} />
      </Grid> */}
        <Grid item xs={12} sm={6}>
          {/* <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>  */}
          <Typography gutterBottom>Full Name : {`${formInitialValues.firstName} ${formInitialValues.lastName}`}</Typography>
          <Typography gutterBottom>EmailId :</Typography>
          <Typography gutterBottom>Address :</Typography>
          <Typography gutterBottom>Mobile :</Typography>
          <Typography gutterBottom>Profession :</Typography>
      </Grid> 
    </React.Fragment>
  );
}
