import React from 'react'
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import CategoriesEmployer from './CategoriesEmployer';
import JobSeekerCvList from '../pages/JobSeekerCvList';
import JobSeekerList from '../pages/JobSeekerList';
export default function DashboardEmployer() {
    return (
        <div>
            <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CategoriesEmployer />
          </Grid.Column>
          <Grid.Column width={12}>
          <Route exact path="/employer/getAllCv" component={JobSeekerCvList}/>
          <Route exact path="/employer/getAll" component={JobSeekerList}/> 
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
