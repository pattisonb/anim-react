import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // <nav className="navbar">
    //   <div className="navbar-spacing">
    //     <div className="navbar-logo">
    //       <Link to="/">
    //         <img src={logo} alt="Logo" />
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="navbar-spacing">
    //     <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
    //       <li>
    //         <Link to="/PrivacyPolicy">PRIVACY POLICY</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">CONTACT</Link>
    //       </li>
    //       {isOpen && (
    //         <li>
    //           <button className="close-button" onClick={toggleMenu}>
    //             CLOSE
    //           </button>
    //         </li>
    //       )}
    //     </ul>
    //     <div className="navbar-hamburger" onClick={toggleMenu}>
    //       <div className={`bar ${isOpen ? 'active' : ''}`} />
    //       <div className={`bar ${isOpen ? 'active' : ''}`} />
    //       <div className={`bar ${isOpen ? 'active' : ''}`} />
    //     </div>
    //   </div>
    // </nav>
  //   <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
  //     <div className={`navbar-logo ${isOpen ? 'menu-open' : ''}`}>
  //           <Link to="/">
  //             <img src={logo} alt="Logo" />
  //           </Link>
  //     </div>
  //     <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
  //     <li>
  //           <Link to="/PrivacyPolicy">PRIVACY POLICY</Link>
  //         </li>
  //         <li>
  //           <Link to="/contact">CONTACT</Link>
  //         </li>
  //     </div>
  //     <div className={`navbar-hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
  //          <div className={`bar ${isOpen ? 'active' : ''}`} />
  //          <div className={`bar ${isOpen ? 'active' : ''}`} />
  //          <div className={`bar ${isOpen ? 'active' : ''}`} />
  //        </div>
  //     {isOpen && (
  //       <div className="side-menu" ref={sideMenuRef}>
  //         <ul>
  //           <li>
  //           <Link to="/">
  //             <img src={logo} alt="Logo" />
  //           </Link>
  //           </li>
  //           <li>
  //           <Link to="/PrivacyPolicy">PRIVACY POLICY</Link>
  //         </li>
  //         <li>
  //           <Link to="/contact">CONTACT</Link>
  //         </li>
  //         </ul>
  //         <button className="close-button" onClick={toggleMenu}>
  //               CLOSE
  //           </button>
  //       </div>
  //     )}
  // </nav>

  <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
  <div className="navbar-logo">
    <NavLink exact to="/" className="nav-link">
      <img src={logo} alt="Logo" height={'75px'}/>
    </NavLink>
  </div>
  <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
    <NavLink exact to="/privacyPolicy" className="nav-link">
      <h2>PRIVACY</h2>
    </NavLink>
    <NavLink exact to="/contact" className="nav-link">
      <h2>CONTACT</h2>
    </NavLink>
  </div>
  <div className={`navbar-hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
    <span />
    <span />
    <span />
  </div>
  {isOpen && (
    <div className="side-menu" ref={sideMenuRef}>
      <ul>
        <li>
          <NavLink exact to="/" className="side-menu-link" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/privacyPolicy" className="side-menu-link" onClick={closeMenu}>
            <h2>PRIVACY</h2>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" className="side-menu-link" onClick={closeMenu}>
            <h2>CONTACT</h2>
          </NavLink>
        </li>
      </ul>
      <button className="close-button" onClick={closeMenu}>
        CLOSE
      </button>
    </div>
  )}
</nav>


  );
};

export default Navbar;
