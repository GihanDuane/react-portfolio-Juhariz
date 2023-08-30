import React from 'react';

const Header = () => {
  
  return (
    <header className="header">
      <div className="site-title title-font">
        <a href="/" className="">Juhariz Pandog/Kheil Artimist</a>
        <div className="site-subtitle visible-desktop">Freelance Illustrator/Character Concept designer</div>
      </div>
      
      <ul>
        <CustomLink href="/Home">Home</CustomLink>
        <CustomLink href="/Resume">Resume</CustomLink>
      </ul>
    </header>
  );
};

function CustomLink( {href, children, ...props} ) {
  const path = window.location.pathname
  return (
    <li>
      <a className={path === href ? "active" : ""} href={href}{...props}>{children}</a>
    </li>
  )
};

export default Header;
