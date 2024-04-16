import logo from '../images/logo.png';
import '../styles/navbar.css';
export default function Navbar(){
    return <>
    <nav className="nav">
        <ul>
            <li>
            <a  href="/" className="site-title"> <img src={logo} alt='logo of the site'/></a>
            </li>
            <li>
                <a href="/about-us">ჩვენ შესახებ</a>
            </li>
            <li>
                <a href="/activity">საქმიანობა</a>
            </li>
            <li>
                <a href="/publications">პუბლიკაციები</a>
            </li>
            <li>
                <a href="/join">წევრობა</a>
            </li>
            <li>
                <a href="/dontaion">დონაცია</a>
            </li>
            <li>
                <a href="/contact">კონტაქტი</a>
            </li>
        </ul>
        <button className='donation'> დონაცია </button>
    </nav>
    </>
}