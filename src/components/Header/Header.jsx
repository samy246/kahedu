import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";
import img from '../../assests/images/clg.png'

const navLinks = [
  {
    display: "Home",
    // url: "#",
  },
  {
    display: "Staff",
    // url: "#",
  },

  {
    display: "Student",
    // url: "#",
  },
  {
    display: "Admin",
    // url: "#",
  },
  {
    display: "Placement",
    // url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              {/* <i class="ri-pantone-line"></i>  */}
           <img src= {img} alt="clg"/>
            </h2>
          </div>

          <div>
          <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
              <li  className="nav__item">
                <Link to={"/"}>
                    <a >Home</a>
                    </Link>
                  </li>
                  <li  className="nav__item">
                    <Link to={"/staff"}>
                    <a >Staff</a>
                    </Link>
                  </li>
                  <li  className="nav__item">
                  <Link to={"/student"}>
                    <a >Student</a>
                    </Link>
                  </li>
                  <li  className="nav__item">
                    <Link to={"/placement"}>
                    <a >Placement</a>
                    </Link>
                  </li>

{/*
                {navLinks.map((item, index) => (
                  <li  className="nav__item">
                    <a >{item.display}</a>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            {/* <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li  className="nav__item">
                    <a >{item.display}</a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
