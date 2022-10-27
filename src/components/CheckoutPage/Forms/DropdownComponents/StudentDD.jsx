import { Grid } from '@material-ui/core'
import React from 'react'

const StudentDD = () => {
  return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <InputField name={uEducation.name} label={uEducation.label} fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField name={uSchool.name} label={uSchool.label} fullWidth />
            </Grid>
            <br />
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

export default StudentDD
