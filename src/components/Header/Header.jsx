import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
// import Resume from '../../assets/Vinayak_Singh_Resume.pdf';
import './Header.css'

export default function Header() {
  const [isActive, setActive] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light');
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-black/60 light:bg-gray-100/60 backdrop-blur-sm transition">
      {/* <Router> */}
        {/* Logo */}
        <HashLink smooth to="#home" className="text-2xl md:text-3xl font-bold text-white light:text-black cursor-pointer">
          <span>{"Towhidul "}</span>
          <span>{"Islam"}</span>
        </HashLink>

        {/* Theme Toggle */}
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavHashLink smooth to="#home" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">Home</NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">About Me</NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">Project</NavHashLink>
          <NavHashLink smooth to="#experience" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">Experience</NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">Contact</NavHashLink>
          {/* <a
            href={Resume}
            download
            className="bg-green-400 text-black px-4 py-2 rounded-full font-medium hover:bg-green-500 transition"
          >
            Resume
          </a> */}
        </nav>

        {/* Mobile Hamburger */}
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className="md:hidden flex flex-col justify-center space-y-1 cursor-pointer"
          onClick={() => setActive(!isActive)}
        >
          <span className={`block h-0.5 w-6 bg-white light:bg-black transition ${isActive ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white light:bg-black transition ${isActive ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white light:bg-black transition ${isActive ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>

        {/* Mobile Navigation */}
        {isActive && (
          <div className="absolute top-full left-0 w-full bg-black light:bg-gray-100 flex flex-col items-center space-y-4 py-6 z-40">
            <NavHashLink smooth to="#home" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">Home</NavHashLink>
            <NavHashLink smooth to="#about" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">About Me</NavHashLink>
            <NavHashLink smooth to="#project" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">Project</NavHashLink>
            <NavHashLink smooth to="#experience" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">Experience</NavHashLink>
            <NavHashLink smooth to="#contact" onClick={closeMenu} className="text-white light:text-black hover:text-green-400 transition">Contact</NavHashLink>
            {/* <a
              href={Resume}
              download
              className="bg-green-400 text-black px-4 py-2 rounded-full font-medium hover:bg-green-500 transition"
            >
              Resume
            </a> */}
          </div>
        )}
      {/* </Router> */}
    </header>
  );
}



