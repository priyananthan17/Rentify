import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import "../../styles/header.css";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/bikes", display: "Tariff" },
  { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Contact" },
  { path: "/admin", display: "Admin" },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">

      {/* Header Middle */}
      <div className="header__middle">
      <Container>
          <Row>
            <Col lg="6" md="6" sm="6"><span className="webname">RENTIFY</span>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <span>
                  +91 9362861717 / +91 7397523246 | 
                  <a href="mailto:717821l137@kce.ac.in"> Chat Now</a>
                  
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Navigation */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu" onClick={toggleMenu} role="button" tabIndex="0" onKeyPress={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
            <div className="navigation" ref={menuRef}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? "nav__active nav__item" : "nav__item")}
                    key={index}
                    onClick={toggleMenu}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" aria-label="Search" />
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
