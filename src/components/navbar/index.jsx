import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import img from "../../images/zoomlogo.png";
import { JwtId } from "../../helpers/JwtId";

const Navbarr = () => {
  const token = JwtId();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  function handleMouseEnter() {
    setIsDropdownOpen(true);
  }
  function handleMouseLeave() {
    setIsDropdownOpen(false);
  }
  const handleLogout =()=>{
    localStorage.removeItem("loginToken")
  }

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/">
          <img style={{ height: "100px" }} src={img} alt="navbar"></img>
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={"/about-us"} className="nav-link">
              About Us
            </Link>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <li
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className=" nav-link"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay="1000"
                data-close-others="false"
              >
                Services
              </Link>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      tabIndex="-1"
                      to={`/services/${"Carpet Cleaning"}`}
                    >
                      Carpet Cleaning
                    </Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <Link
                      className="dropdown-item"
                      tabIndex="-1"
                      to={`/services/${"Floor Cleaning"}`}
                    >
                      Floor Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      tabIndex="-1"
                      to={`/services/${"Air Duct Cleaning"}`}
                    >
                      Air Duct Cleaning
                    </Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <Link
                      className="dropdown-item"
                      tabIndex="-1"
                      to={`/services/${"Upholstery Cleaning"}`}
                    >
                      Upholstery Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      tabIndex="-1"
                      to={`/services/${"Floor Installation"}`}
                    >
                      Floor Installation
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <Link to={"/contact"} className="nav-link ">
              Contact
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to={"/cart"} className="nav-link">
              <i className="fa fa-shopping-cart mr-1 text-warning"></i>Cart
            </Link>

            {Object.keys(token).length === 0 ? (
              <>
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"} className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbarr;
