import react from 'react';
import beqa from './images/green.jpeg';


export default function Donations() {
    return (
        <>
           <div className='dontaions-container'>
                <img src={beqa}/>
                <div className='dontaions-text'>
                    <h1>დონაცია</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis sit amet pharetra. Integer mollis eget felis non finibus. Nullam nibh mauris, fermentum vitae felis vehicula, aliquam bibendum sapien. In euismod velit vitae neque  </p>
                    <div className='q1'>
                    <input name="myInput" placeholder='სახელი' />
                    <input name="myInput" placeholder='გვარი' />
                    </div>
                    <div className='q1'>
                    <input name="myInput" placeholder='თანხა' />
                    <input name="myInput" placeholder='კუპიურა' />
                    </div>
                    <button className='bt1'>დონაცია</button>
                    <hr/>
                </div>
           </div>
        </>
    )
}