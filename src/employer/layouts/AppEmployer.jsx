import React from 'react'
import NaviEmployer from './NaviEmployer'
import { Container } from 'semantic-ui-react'
import DashboardEmployer from './DashboardEmployer'
export default function AppEmployer() {
    return (
        <div>
            <NaviEmployer/>
            <Container className="appEmployer">
            <DashboardEmployer/>
            </Container>
        </div>
    )
}
