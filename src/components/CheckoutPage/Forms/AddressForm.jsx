import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';



export default function AddressForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      email,
      address1,
      city,
      contactNo,
      whatsAppNo,
      state,
      zipcode,
      country,
    }
  } = props;
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4} >
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField name={contactNo.name} label={contactNo.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField name={whatsAppNo.name} label={whatsAppNo.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField name={city.name} label={city.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField name={state.name} label={state.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField name={country.name} label={country.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        {/* <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid> */}
      </Grid>
    </div>
  );
}
