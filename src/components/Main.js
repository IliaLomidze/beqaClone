import React from 'react';
import truck from '../images/truck.jpeg';
import Beqa from '../images/beqa.jpeg'
import Kids from '../images/kids.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/main.css'

export default function MainContainer() {
    return (
        <>
        <div className="nav-img"><img src={truck} alt='Beqa giving away money to poor poeple'/></div>
        <div className="main-container">
            <div className='main-header'> 
                <h1>სტატიები</h1>
                <p>ყველას ნახვა</p>
            </div>
            <div className='main-text'>
                       <img src={Beqa}/>
                <div className='reading'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis sit amet pharetra. Integer mollis eget felis non finibus. Nullam nibh mauris, fermentum vitae felis vehicula, aliquam bibendum sapien. In euismod velit vitae neque rhoncus congue. Aliquam luctus, sapien in consectetur cursus, quam urna euismod magna, sed pellentesque massa libero eu lorem. Aenean rhoncus gravida nisl vel pretium. Nam ac nisl non ipsum vestibulum vehicula vulputate sagittis magna. Aenean est nisl, convallis volutpat tempor ac, tempus ac ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rhoncus sodales tempor. Nunc pretium tortor felis, eget cursus magna accumsan a.
Etiam eu molestie eros, commodo hendrerit sapien. Maecenas tempus leo ac nisi iaculis porta. Sed sapien tortor, aliquet a velit ut, lacinia molestie velit. Maecenas ornare consequat massa ullamcorper dapibus. Aliquam auctor, sapien sit amet accumsan facilisis, enim enim aliquet arcu, tincidunt pellentesque justo turpis id neque. Duis eleifend nunc sit amet mi dapibus ornare. Suspendisse vel libero sem.
                       </p>
                        <a> <FontAwesomeIcon icon={faArrowRight} /> Continue Reading</a>
                </div>
            </div>
        </div>
        <div className="main-container2">
            <div className='main-text2'>
                <div className='reading2'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis sit amet pharetra. Integer mollis eget felis non finibus. Nullam nibh mauris, fermentum vitae felis vehicula, aliquam bibendum sapien. In euismod velit vitae neque rhoncus congue. Aliquam luctus, sapien in consectetur cursus, quam urna euismod magna, sed pellentesque massa libero eu lorem. Aenean rhoncus gravida nisl vel pretium. Nam ac nisl non ipsum vestibulum vehicula vulputate sagittis magna. Aenean est nisl, convallis volutpat tempor ac, tempus ac ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rhoncus sodales tempor. Nunc pretium tortor felis, eget cursus magna accumsan a.
Etiam eu molestie eros, commodo hendrerit sapien. Maecenas tempus leo ac nisi iaculis porta. Sed sapien tortor, aliquet a velit ut, lacinia molestie velit. Maecenas ornare consequat massa ullamcorper dapibus. Aliquam auctor, sapien sit amet accumsan facilisis, enim enim aliquet arcu, tincidunt pellentesque justo turpis id neque. Duis eleifend nunc sit amet mi dapibus ornare. Suspendisse vel libero sem.
                       </p>
                        <a> <FontAwesomeIcon icon={faArrowRight} /> Continue Reading</a>
                </div>
                <img src={Kids}/>   
            </div>
        </div>
        </>
    );
}
