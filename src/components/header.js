import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"

const Header = () => (
  <Container className="pl-auto main-container" fluid={true}>
  <Navbar expand="lg">
      <Navbar.Toggle className="border-0 navbar-dark" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbarResponsive" >
          <Nav className="link-container">
              <Link style={{ color: "white" }} className="nav-link" to="/" >Home</Link>
              <a style={{ color: "white" }} className="nav-link" href="#contact" >Contact/Booking</a>
              <a className="social" href="https://www.facebook.com/Moon-Travelers-Tarot-220673835218164" target=" _blank" rel="noopener noreferrer" aria-label="facebook"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
              <a className="social" href="https://www.instagram.com/moontravelers/" target=" _blank" rel="noopener noreferrer" aria-label="instagram" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
          </Nav>
      </Navbar.Collapse>
  </Navbar>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
