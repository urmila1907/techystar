import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav>
            <h1 id='heading'>Techystar</h1>
            <main>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/guides"}>Guides</Link>
                <Link to={"/project"}>Project ideas</Link>
                <Link to={"/contact"}>Contact info</Link>
            </main>
        </nav>
    </div>
  )
}

export default Header