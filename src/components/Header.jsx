import React from 'react';

const Header = () => {
  return (
    <header>
      <div class="site-title title-font">
        <a href="/" className="">Juhariz Pandog/Kheil Artimist</a>
        <div class="site-subtitle visible-desktop">Freelance Illustrator/Character Concept designer</div>
      </div>
      
      <ul>
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
            </header>
    // <header class="site-header">
    //             <div class="container-lg">
    //                 <div class="row row-middle">
    //                     <div class="site-header-col-left">
    //                         <div class="site-title title-font">
    //                             <a href="/">Juhariz Pandog/Kheil Artimist</a>
    //                             <div class="site-subtitle visible-desktop">Freelance Illustrator/Character Concept designer</div>
    //                         </div>
    //                     </div>
    //                     <div class="site-header-col-right text-right">
    //                         <div class="hidden-desktop site-header-menu-btn" data-responsive-nav-toggle-btn>
    //                             <div class="menu-icon">
    //                                 <span class="menu-icon-line"></span>
    //                                 <span class="menu-icon-line"></span>
    //                                 <span class="menu-icon-line"></span>
    //                             </div>
    //                         </div>
    //                         <div class="visible-desktop">
    //                             <div class="header-nav">
    //                                 <div class="header-nav-item active">
    //                                     <a target="_self" href="/">Home</a>
    //                                 </div>
    //                                 <div class="header-nav-item">
    //                                     <a target="_self" href="/resume">Resume</a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="responsive-nav-container hidden-desktop">
    //                     <ul class="nav header-nav">
    //                         <li class="header-nav-item active">
    //                             <a target="_self" href="/">Home</a>
    //                         </li>
    //                         <li class="header-nav-item">
    //                             <a target="_self" href="/resume">Resume</a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </header>
  );
};

export default Header;
