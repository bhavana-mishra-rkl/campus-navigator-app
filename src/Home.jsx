import { useEffect, useRef, useState } from 'react';
import logo from './assets/logo.png'
import Map from './Map.jsx'

function Home(){

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {setIsOpen(!isOpen)};
    const mapRef = useRef(null);
    const navlinks = [
        {name: "🏠 Home", url: `#home`},
        {name: `🗺️ Map`, url: `#map`},
        {name: `🏢 Buildings`, url: `#buildings`},
        {name: `💁‍♂️ About`, url: `#about`}
    ]

    useEffect(() => {
        const handlescroll = () => {
                if (window.scrollY > 100) {
                    document.body.classList.add('scrolled');
                } else {
                    document.body.classList.remove('scrolled');
                }
            };
        window.addEventListener("scroll" , handlescroll); 
        return () => window.removeEventListener("scroll" , handlescroll);
    }, []);
    
    const scrollToSec = () => {
        if(mapRef.current){
            {mapRef.current.scrollIntoView({behavior:"smooth" , block:"start"})};
        }
    };
    
    return(
        <>
            <section className="home-pg">
                <header className={`dashboard-container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                    <nav className="navbar">
                        <div className="website-name">
                            <img src={logo} id='logoimg'></img>
                            <div>
                                <h2 className='outr'>OUTR</h2>
                                <h4 className='web-name'>Campus Navigator</h4>
                            </div>
                        </div>
                        <ul className='navbar-links-desktop'>
                            {navlinks.map((link, index) => (
                                <li key={index}><a href={link.url}>{link.name}</a></li>
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
                                <li key={index}><a href={link.url} onClick={toggleSidebar}>{link.name}</a></li>
                            ))}
                        </ul>
                    </aside>
                </header>
                <main>
                    <article className='website-description'>
                        <div className='box-heading'>
                            <span>◈ New - Smart campus map</span>
                        </div> 
                        <h1>Find every place on campus, <span>easily</span>.</h1> 
                        <p>Search for libraries, hostels, canteens and labs. Tap any building for opening-closing timings, facilities and directions - all in quite, calm, beautiful interface.</p>
                        <br/><br/>
                        <button className='explore-btn' onClick={scrollToSec}>📍Explore Now !</button>
                    </article>
                </main>
            </section>
            <div ref={mapRef}>
                <Map/>
            </div>
        </>
    )
}

export default Home