import React from 'react'
import Styles from './Navbar.module.css'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import companyLogo from '../../assets/images/logoTop.png'

export default function Navigation () {
  return (
    <Navbar expand='lg' className='mt-0 pt-0' collapseOnSelect>
      <Container className={Styles.navContainer}>
        <Navbar.Brand href='#' className={Styles.navBrand}>
          <img className={Styles.logo} src={companyLogo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#' className={Styles.navLink}>
              Companies
            </Nav.Link>
            <Nav.Link href='#' className={Styles.navLink}>
              Candidates
            </Nav.Link>
            <Nav.Link href='#' className={Styles.navLink}>
              Assessment
            </Nav.Link>
            <Nav.Link href='#' className={Styles.navLink}>
              Post a Job
            </Nav.Link>
            <Nav.Link href='#' className={Styles.navLink}>
              Career Advice
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#' className={Styles.navLink}>
              Sign Up
            </Nav.Link>
            <Nav.Link eventKey={2} href='#' className={Styles.navLinkSignUp}>
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
