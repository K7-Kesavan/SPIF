import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField, SelectField } from '../../FormFields';

export default function ProfessionForm(props) {

  const professions = [
    {
      value: undefined,
      label: 'None'
    },
    {
      value: '1',
      label: 'Employed'
    },
    {
      value: '2',
      label: 'Professionals'
    },
    {
      value: '3',
      label: 'Business Owner'
    },
    {
      value: '4',
      label: 'Seeking Employment'
    },
    {
      value: '5',
      label: 'Student'
    },
    {
      value: '6',
      label: 'Parent'
    },
    {
      value: '7',
      label: 'Others'
    }
  ];
  

  const {
    formField: { profession, nameOnCard, cardNumber, expiryDate, cvv }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Educational Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={profession.name}
            label={profession.label}
            data={professions}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
          
            name={nameOnCard.name}
            label={nameOnCard.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={cardNumber.name}
            label={cardNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={['month','year']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={cvv.name} label={cvv.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
