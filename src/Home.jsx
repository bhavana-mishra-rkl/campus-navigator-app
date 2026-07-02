import { useRef } from 'react'
import Map from './Map.jsx'

function Home(){
    const mapRef = useRef(null);
    
    const scrollToSec = () => {
        if(mapRef.current){
            mapRef.current.scrollIntoView({behavior:"smooth" , block:"start"});
        }
    };
    
    return(
        <>
            <section className="home-pg" style={{ paddingTop: '80px' }}>
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
            <section id="homeMap" ref={mapRef} style={{ scrollMarginTop: '80px' }}>
                <Map/>
            </section>
        </>
    )
}

export default Home
