import './Hero.css';
import { Button } from './Button';
import './LandingPage.css';
import './Button.css';

function Hero() {
     return (
    <div className='h-container'>
      <h1>In Demand RPI Tutors. On Demand </h1>
      
      <div className='h-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LOG IN
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default Hero;

