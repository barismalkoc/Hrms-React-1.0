import React, { useState } from 'react'
import SignedInEmployer from './SignedInEmployer'
import SignedOutEmployer from './SignedOutEmployer'
import { NavLink } from 'react-router-dom';
import { Container, Menu } from "semantic-ui-react";

export default function NaviEmployer() {
    const [isAuthenticatedEmployer, setisAuthenticatedEmployer] = useState(false);

    function handleSignOut(){
        setisAuthenticatedEmployer(false);
    }

    function handleSignIn(){
        setisAuthenticatedEmployer(true);
    }

    return (
        <div>
             <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/employer" name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            
            {isAuthenticatedEmployer ? (
              <SignedInEmployer signOut={handleSignOut} />
            ) : (
              <SignedOutEmployer signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
        </div>
    )
}
