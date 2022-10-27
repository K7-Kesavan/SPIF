import { Grid } from '@material-ui/core'
import React from 'react'

const EmployedDD = () => {
  return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <InputField name={uCompany.name} label={uCompany.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField name={uDesignation.name} label={uDesignation.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField name={uYearOfExp.name} label={uYearOfExp.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField name={uDepartment.name} label={uDepartment.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField name={uWorkLocation.name} label={uWorkLocation.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField name={uExtraCurrical1.name} label={uExtraCurrical1.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField name={uExtraCurrical2.name} label={uExtraCurrical2.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField name={uExtraCurrical3.name} label={uExtraCurrical3.label} fullWidth />
            </Grid>
        </Grid>
    </div>
  )
}

export default EmployedDD
