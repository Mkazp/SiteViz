import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const styles = {
  customNavbar: {
    backgroundColor: '#000',
    width: '100%',
    marginTop: 0,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20%',
    marginRight: '5%',
  },
  brandText: {
    paddingLeft: '10px',
    textDecoration: 'underline',
    textDecorationColor: 'white',
    textDecorationThickness: '2px',
    color: 'white',
  },
  navBr: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    fontSize: '1em',
    marginLeft: '15px',
    textDecoration: 'none',
  },
  activeNavLink: {
    backgroundColor: '#6b7475',
    color: 'white',
  },
};

const Menu = () => {


  return (
    <Navbar expand="lg" style={styles.customNavbar}>
      <Container style={styles.container}>
        <Link to="/" className="text-white d-flex align-items-center" style={styles.brand}>
          <h2 className="m-0 ml-2" style={styles.brandText}>
            Руснак Анна
          </h2>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={styles.navBr}>
            <NavLink to="/Achivment" className="nav-link" style={styles.navLink} activeStyle={styles.activeNavLink}>
              Мои достижения
            </NavLink>
            <NavLink to="/Box" className="nav-link" style={styles.navLink} activeStyle={styles.activeNavLink}>
              Методическая деятельность
            </NavLink>
            <NavLink to="/Pupils" className="nav-link" style={styles.navLink} activeStyle={styles.activeNavLink}>
              Достижение воспитаников
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;