import Beqa from '../images/imenabeqa.jpeg';
import Lau from '../images/lau.jpeg';
import Popup from './popup';
import '../styles/cards.css';
import { useState } from 'react';

export default function Cards() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className='team'>
      <h2>გუნდი</h2>
      <div className='teampics'>
        <div className='row1'>
          <img src={Beqa} alt="Beqa Geldiashvili"/>
          <button onClick={() => setButtonPopup(true)}>პროფილის ნახვა</button>
          <p>Beka Geldiashvili</p>
          <a href='/'>Founder</a>
        </div>
        <div className='row1'>
          <img src={Lau} alt="Laura Papaskua"/>
          <p>Laura Papaskua</p>
          <a href='/'>Founder</a>
        </div>
        <div className='row1'>
          <img src={Beqa} alt="Beqa Geldiashvili"/>
          <p>Beka Geldiashvili</p>
          <a href='/'>Founder</a>
        </div>
      </div>
      <div className='teampics'>
        <div className='row1'>
          <img src={Beqa} alt="Beqa Geldiashvili"/>
          <p>Beka Geldiashvili</p>
          <a href='/'>Founder</a>
        </div>
        <div className='row1'>
          <img src={Lau} alt="Laura Papaskua"/>
          <p>Laura Papaskua</p>
          <a href='/'>Founder</a>
        </div>
        <div className='row1'>
          <img src={Beqa} alt="Beqa Geldiashvili"/>
          <p>Beka Geldiashvili</p>
          <a href='/'>Founder</a>
        </div>
        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
          <div className='popup-container'>
            <h3>European Youth Initiative</h3>
          </div>
          <div className='main-info'>
            <img src={Beqa} alt="Beqa Geldiashvili"/>
            <div><h3>Beqa Geldiashvili</h3><p>Founder</p></div>
          </div>
          <div className='beqa-story'>
            <h3>About Beka Geldiashvili</h3>
            <p>Alba began her investing career focused on consumer, retail, and industrials; but since she discovered the world of software seven years ago, she hasn’t looked back.
The intersection of people and software is Alba’s sweet spot. She deeply admires entrepreneurs and believes that software has the power to transform every industry, while empowering employees.
In and out of work, she is driven by her belief that “life begins at the end of your comfort zone.”
‍            </p>
          </div>
        </Popup>
      </div>
    </div>
  );
}
