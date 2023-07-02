import { useState } from 'react';
import logo from '../images/portfolio-logo.png';
import MobileNavMenu from './MobileNavMenu';

function HamburgerMenu() {
const [navOpen, setNavOpen] = useState(false);

  function showHideNav(isOpen) {
    setNavOpen(isOpen);
  }


return (
  <header className={navOpen ? 'show' : undefined} id="page-header">
    <div>  
      <span>
      <img src={logo} alt="logo" className="w-10 h-auto m-2 fixed top-0 left-0"></img>
    </span>
      <button
        className="hamburger-btn fixed bottom-2 right-0 z-[9999]"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          showHideNav(!navOpen);
        }}
      >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <MobileNavMenu showHideNav={showHideNav} navOpen={navOpen} />
    </div>
  </header>
);
}

export default HamburgerMenu;