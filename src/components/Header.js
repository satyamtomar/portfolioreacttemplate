import React, { useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
const Header = () => {
    const location=useLocation();
    const [toggleButton,setToggleButton]=useState(false);

  return (
    <div>
          <header id="header" className={`${(location.pathname=='/about'||location.pathname=='/portfolio'||location.pathname=='/resume'||location.pathname=='/services'||location.pathname=='/contact')?'header-top':''}`}>
    <div class="container">

      <h1><Link to="/">Satyam Tomar</Link></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a> 
      <h2>I am a passionate <span>Web developer</span> from India</h2>
      <a
              className="bi bi-list mobile-nav-toggle"
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarNav"
              onClick={()=>setToggleButton(!toggleButton)}
            >
            </a>
       {
        !toggleButton?
        <nav id="navbar" class={`navbar `}>
        <ul>
          <li><Link class={`nav-link ${location.pathname=='/'?'active':''} `}   to="/">Home</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/about'?'active':''} `}  to="/about">About</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/resume'?'active':''} `}  to="/resume">Resume</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/services'?'active':''} `}  to="/services">Services</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/portfolio'?'active':''} `}  to="/portfolio">Portfolio</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/contact'?'active':''} `}  to="/contact">Contact</Link></li>
        </ul>
        
      </nav>
      :
      <nav id="navbar" class={`navbar ${toggleButton?'navbar-mobile':''}`}>
        <ul>
          <li><Link class={`nav-link ${location.pathname=='/'?'active':''} `}  onClick={()=>{setToggleButton(!toggleButton)}} to="/">Home</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/about'?'active':''} `} onClick={()=>{setToggleButton(!toggleButton)}} to="/about">About</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/resume'?'active':''} `} onClick={()=>{setToggleButton(!toggleButton)}} to="/resume">Resume</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/services'?'active':''} `} onClick={()=>{setToggleButton(!toggleButton)}} to="/services">Services</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/portfolio'?'active':''} `} onClick={()=>{setToggleButton(!toggleButton)}} to="/portfolio">Portfolio</Link></li>
          <li><Link class={`nav-link ${location.pathname=='/contact'?'active':''} `} onClick={()=>{setToggleButton(!toggleButton)}} to="/contact">Contact</Link></li>
        </ul>
        
      </nav>
      
       }     
      
      <div class="social-links">
        {/* <a href="#" class="twitter"><i class="bi bi-twitter"></i></a> */}
        <a href="https://github.com/satyamtomar" class="github"><i class="bi bi-github"></i></a>
        {/* <a href="" class="instagram"><i class="bi bi-instagram"></i></a> */}
        <a href="https://linkedin.com/in/satyam-tomar-0873a91b0/" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
    </div>
  )
}

export default Header