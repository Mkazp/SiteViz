import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';


const styles = {
  customNavbar: {
    backgroundColor: '#000',
    width: '100%',
    marginTop: 0,
  },
  container: {
    display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  brand: {
    marginLeft: '20%',
    display: 'flex',
    alignItems: 'center',
  },
  brandText: {
    paddingLeft: '30px',
    textDecoration: 'underline', // Устанавливаем подчеркивание
  textDecorationColor: 'white', // Цвет подчеркивания
  textDecorationThickness: '2px', // Толщина подчеркивания
    color: 'white',
  },
  navBr: {
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    // marginRight: '20%',
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
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={styles.customNavbar}>
        <Container style={styles.container}>
          <Link to="/" className="text-white d-flex align-items-center" style={styles.brand}>
            <h2 className="m-0 ml-2" style={styles.brandText}>
              Руснак Анна
            </h2>
          </Link>
          <Nav  style={styles.navBr}>
            {/* <NavLink to="/Home" className="nav-link" style={styles.navLink} activeStyle={styles.activeNavLink}>
              О себе
            </NavLink> */}
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
        </Container>
      </nav>
    </>
  );
};

export default Menu;