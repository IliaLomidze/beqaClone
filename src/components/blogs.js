import React from "react";
import Beqa from '../images/beqa.jpeg'
import Greens from '../images/green.jpeg'
import truck from '../images/truck.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/blog.css'

export default function Blogs(){
    return(
        <>
        <div className="blog-container">
            <div className="blog-title">
                <h1>ბლოგები</h1>
                <a>ყველას ნახვა</a>
            </div>
            <div className="blogs">
                <div className="blog123">
                    <img src={Greens}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis sit amet pharetra. Integer mollis eget felis non finibus. Nullam nibh mauris, fermentum vitae felis vehicula, aliquam bibendum sapien. In euismod velit vitae neque rhoncus congue. Aliquam luctus, sapien in consectetur cursus, quam urna euismod magna, sed pellentesque massa libero eu lorem. Aenean rhoncus gravida nisl vel pretium. Nam ac nisl non ipsum vestibulum vehicula vulputate sagittis magna. Aenean est nisl, convallis volutpat </p>
                    <a> <FontAwesomeIcon icon={faArrowRight} /> Continue Reading</a>
                </div>
                <div className="blog123">
                    <img src={Beqa}/>
                    <div className="card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis sit amet pharetra. Integer mollis eget felis non finibus. Nullam nibh mauris, fermentum vitae felis vehicula, aliquam bibendum sapien. In euismod velit vitae neque rhoncus congue. Aliquam luctus, sapien in consectetur cursus, quam urna euismod magna, sed pellentesque massa libero eu lorem. Aenean rhoncus gravida nisl vel pretium. Nam ac nisl non ipsum vestibulum vehicula vulputate sagittis magna. Aenean est nisl, convallis volutpat </p>
                    <a> <FontAwesomeIcon icon={faArrowRight} /> Continue Reading</a>
                    </div>
                </div>
                <div className="blog123">
                    <img src={truck}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis sit amet pharetra. Integer mollis eget felis non finibus. Nullam nibh mauris, fermentum vitae felis vehicula, aliquam bibendum sapien. In euismod velit vitae neque rhoncus congue. Aliquam luctus, sapien in consectetur cursus, quam urna euismod magna, sed pellentesque massa libero eu lorem. Aenean rhoncus gravida nisl vel pretium. Nam ac nisl non ipsum vestibulum vehicula vulputate sagittis magna. Aenean est nisl, convallis volutpat </p>
                    <a> <FontAwesomeIcon icon={faArrowRight} /> Continue Reading</a>
                </div>
            </div>
        </div>
        </>
    )
}