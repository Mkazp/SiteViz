// import React, { useState } from 'react';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { NavLink, Link } from 'react-router-dom';

// const styles = {
//   customNavbar: {
//     backgroundColor: '#000',
//     width: '100%',
//     marginTop: 0,
//   },
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   brand: {
//     display: 'flex',
//     alignItems: 'center',
//     marginLeft: '20%',
//     marginRight: '5%',
//   },
//   brandText: {
//     paddingLeft: '10px',
//     textDecoration: 'underline',
//     textDecorationColor: 'white',
//     textDecorationThickness: '2px',
//     color: 'white',
//   },
//   navBr: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   navLink: {
//     color: 'white',
//     fontSize: '1em',
//     marginLeft: '15px',
//     textDecoration: 'none',
//   },
//   activeNavLink: {
//     backgroundColor: '#6b7475',
//     color: 'white',
//   },
// };

// const Menu = () => {


//   return (
//     <Navbar expand="lg" style={styles.customNavbar}>
//       <Container style={styles.container}>
//         <Link to="/" className="text-white d-flex align-items-center" style={styles.brand}>
//           <h2 className="m-0 ml-2" style={styles.brandText}>
//             Руснак Анна
//           </h2>
//         </Link>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto" style={styles.navBr}>
//             <NavLink to="/Achivment" className="nav-link" style={styles.navLink} activeStyle={styles.activeNavLink}>
//               Мои достижения
//             </NavLink>
//             <NavLink to="/Box" className="nav-link" style={styles.navLink} activeStyle={styles.activeNavLink}>
//               Методическая деятельность
//             </NavLink>
//             <NavLink to="/Pupils" className="nav-link" style={styles.navLink} activeStyle={styles.activeNavLink}>
//               Достижения воспитанников
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Menu;

import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#000',
  width: '100%',
  marginTop: 0,
  position: 'relative',
});

const CustomContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Brand = styled(NavLink)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'white',
});

const BrandText = styled(Typography)({
  paddingLeft: '10px',
  textDecoration: 'underline',
  textDecorationColor: 'white',
  textDecorationThickness: '2px',
  fontSize: '1.5em',
});

const NavContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row', // по умолчанию для широких экранов
  alignItems: 'center',
  '@media (max-width: 600px)': {
    flexDirection: 'column', // для экранов шириной 600px и меньше
    textAlign: 'center', // центрируем текст по центру
  },
});

const NavLinkStyled = styled(NavLink)({
  color: 'white',
  fontSize: '1em',
  marginLeft: '15px',
  textDecoration: 'none',
  '&.active': {
    // backgroundColor: '#6b7475',
  },
  '@media (max-width: 600px)': {
    margin: '10px 0', // добавляем отступ снизу для мобильных экранов
  },
});

const Menu = () => {
  return (
    <CustomAppBar>
      <CustomContainer>
        <Brand to="/" exact>
          <BrandText>
            Руснак Анна
          </BrandText>
        </Brand>
        <Toolbar>
          <NavContainer>
            <NavLinkStyled to="/Achivment" activeClassName="active">
              Мои достижения
            </NavLinkStyled>
            <NavLinkStyled to="/Box" activeClassName="active">
              Методическая деятельность
            </NavLinkStyled>
            <NavLinkStyled to="/Pupils" activeClassName="active">
              Достижения воспитанников
            </NavLinkStyled>
          </NavContainer>
        </Toolbar>
      </CustomContainer>
    </CustomAppBar>
  );
};

export default Menu;