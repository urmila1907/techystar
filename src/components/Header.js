import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    
        <nav>
            <h1 id='heading'>Techystar</h1>
            <main>
                <HashLink to={"/#"}>Home</HashLink>
                <HashLink to={"/#about"}>About</HashLink>
                <HashLink to={"/#knowUs"}>Who are we?</HashLink>
                <HashLink to={"/#brands"}>Brands</HashLink>
                <HashLink to={"/contact"}>Contact info</HashLink>
            </main>
        </nav>
    
  )
}

export default Header