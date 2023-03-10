import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Logo, Button } from '../Core/Core'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
    <Button
      as="a"
      variant="ghost"
      text="Open Issue"
      icon="github"
      size="sm"
      href="https://git.generalassemb.ly/ga-wdi-boston/sei-lessons/issues"
    />
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand>
    <Navbar.Brand href="#">
      <Logo />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
