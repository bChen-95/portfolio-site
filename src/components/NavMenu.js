import React, { useState, useEffect}  from 'react';
import { homeIconWhiteBg, homeIconBlackBg, aboutMeIcon, aboutMeIconBlackBg, projectsIcon, projectsIconBlackBg, contactMeIcon, contactMeIconBlackBg } from "../images/svgImages"
import SvgHov from "../features/svgHov"
import { HashLink } from 'react-router-hash-link';

function NavMenu({showHideNav, navOpen}) {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define the content based on the window width
  let content;
  if (windowWidth >= 1024) {
    content = <div className="desktop-nav-menu fixed z-50 right-[2rem] top-[50%] transform -translate-y-1/2">
            <ul className="flex flex-col items-center">
              <li className='relative group'>
                <HashLink smooth to="/#page-header">
                  <SvgHov src={homeIconWhiteBg} hoverSrc={homeIconBlackBg} alt="Home Icon" />
                </HashLink>
                <span className="tooltip-text absolute z-10 opacity-0 group-hover:opacity-100">Home</span>
              </li>
              
              <li>
                <HashLink smooth to="/#about">
                  <SvgHov src={aboutMeIcon} hoverSrc={aboutMeIconBlackBg} alt="About Me Icon" />
                  <span className="tooltip-text">About</span>
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#projects">
                  <SvgHov src={projectsIcon} hoverSrc={projectsIconBlackBg} alt="Projects Icon" />
                  <span className="tooltip-text">Projects</span>
                </HashLink>
               </li> 
              <li>
                <HashLink smooth to="/#contact">
                  <SvgHov src={contactMeIcon} hoverSrc={contactMeIconBlackBg} alt="Contact Me Icon" />
                  <span className="tooltip-text">Contact</span>
                </HashLink>
              </li> 
            </ul>
        </div>;
  } else {
    content = 
    <div>
      <div className="bg-white fixed bottom-0 w-[100vw] h-[60px] z-[500]"></div>
      <div className={navOpen ? "mobile-nav-overlay fixed h-screen w-screen z-10 top-0 ": "hidden"} onClick={() => {showHideNav(!navOpen)}}></div>
      <div className="mobile-nav text-center z-[1001] bg-white">
        <ul className="flex flex-col h-full justify-evenly">
          {[
            { hash: "/#page-header", icon: homeIconWhiteBg },
            { hash: "/#about", icon: aboutMeIcon },
            { hash: "/#projects", icon: projectsIcon },
            { hash: "/#contact", icon: contactMeIcon },
          ].map((item, index) => (
            <li  key={index}>
              <div className="mobileNavLineContainer">
                <div className="mobileNavLine">
                <HashLink  to={item.hash}  onClick={() => {showHideNav(!navOpen)}}>
                  {item.icon}
                </HashLink>
                </div>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
   
  }

  return <nav>{content}</nav>;
};
  
  

export default NavMenu;