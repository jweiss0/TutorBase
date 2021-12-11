import './LandingPage.css';
import Hero from './Hero';
import Services from './Services';

function Home() {
    return (
        <>
        <div id = "home-area">
            <Hero />
        </div>
        <div id = "services-area">
            <Services />
        </div>
        <div id = "about-area">
        </div>
        {/* Team/footer sections added here */}
        </>
    );
}
export default Home;