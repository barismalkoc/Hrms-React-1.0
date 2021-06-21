import React from 'react'
import AppjobSeeker from '../jobSeeker/layouts/AppjobSeeker'
import Navi from './Navi'
import { Route } from 'react-router'
import AppEmployer from '../employer/layouts/AppEmployer'
export default function Dashboard() {
    return (
        <div>
            <Route exact path="/" component={Navi}></Route>
            <Route path="/jobSeeker" component={AppjobSeeker}></Route>
            <Route path="/employer" component={AppEmployer}></Route>
            
        </div>
    )
}
