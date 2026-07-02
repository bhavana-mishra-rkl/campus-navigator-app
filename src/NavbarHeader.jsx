import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import logo from './assets/logo.png'

export default function NavbarHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => { setIsOpen(!isOpen) };

    const navlinks = [
        { name: `🏠 Home`, url: `/` },
        { name: `🗺️ Map`, url: `/#homeMap` },
        { name: `🏢 Buildings`, url: `/buildings` },
        { name: `💁‍♂️ About`, url: `/#about` }
    ];

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 100) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        };
        window.addEventListener("scroll", handlescroll); 
        return () => window.removeEventListener("scroll", handlescroll);
    }, []);

    return (
        <header className={`dashboard-container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <nav className="navbar">
                <div className="website-name">
                    <img src={logo} id='logoimg' alt="Logo" />
                    <div>
                        <h2 className='outr'>OUTR</h2>
                        <h4 className='web-name'>Campus Navigator</h4>
                    </div>
                </div>
                <ul className='navbar-links-desktop'>
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            {link.url.includes("#") ? (
                                <HashLink smooth to={link.url}>
                                    {link.name}
                                </HashLink>
                            ) : (
                                <Link to={link.url}>
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <button className='toggle-btn' onClick={toggleSidebar}>☰</button>
            </nav>
            <aside className="side-dashboard">
                <div className="sidebar-header">
                    <h2 className='dashboard-header'>Menu</h2>
                    <button className='toggle-btn' onClick={toggleSidebar}>▶</button>
                </div>
                <ul className="sidebar-links">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            {link.url.includes("#") ? (
                                <HashLink smooth to={link.url} onClick={toggleSidebar}>
                                    {link.name}
                                </HashLink>
                            ) : (
                                <Link to={link.url} onClick={toggleSidebar}>
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
        </header>
    );
}
