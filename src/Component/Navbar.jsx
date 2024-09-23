import logo from '../assest/shared/logo.svg';
import './Navbar.css';
import React, { useState, useEffect } from 'react';
import home from '../assest/home/background-home-desktop.jpg';
import { Link } from 'react-router-dom';
import dist from '../assest/destination/background-destination-desktop.jpg';
import crew from '../assest/crew/background-crew-desktop.jpg';
import technology from '../assest/technology/background-technology-desktop.jpg';
import hamburger from '../assest/shared/icon-hamburger.svg';
import closeIcon from '../assest/shared/icon-close.svg'; // إضافة أيقونة الإغلاق

export default function Navbar() {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [activeLab, setActiveLabe] = useState('/home');
    const [menuOpen, setMenuOpen] = useState(false); // حالة للتحكم بإظهار القائمة

    // استرجاع الخلفية والصفحة النشطة من localStorage عند تحميل الصفحة
    useEffect(() => {
        const savedBackgroundImage = localStorage.getItem('backgroundImage');
        const savedActiveLab = localStorage.getItem('activeLab');

        if (savedBackgroundImage) {
            setBackgroundImage(savedBackgroundImage);
        }
        if (savedActiveLab) {
            setActiveLabe(savedActiveLab);
        }
    }, []);

    useEffect(() => {
        if (backgroundImage) {
            document.body.style.backgroundImage = `url(${backgroundImage})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundAttachment = 'fixed';
        }
    }, [backgroundImage]);

    const changeBackgroundImage = (imageUrl, pageLabel) => {
        setBackgroundImage(imageUrl);
        setActiveLabe(pageLabel);

        // حفظ الخلفية والصفحة النشطة في localStorage
        localStorage.setItem('backgroundImage', imageUrl);
        localStorage.setItem('activeLab', pageLabel);

        // إغلاق القائمة بعد اختيار عنصر منها
        setMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <div className='nav-img'>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='nav-line'></div>
            <div className='hamburger'>
                <img
                    src={menuOpen ? closeIcon : hamburger} // تبديل الأيقونة
                    alt='hamburger'
                    className='hamburger-icon'
                    onClick={() => setMenuOpen(!menuOpen)} // تبديل الحالة عند الضغط
                />
            </div>
            <div className={`nav-bar ${menuOpen ? 'show-menu' : ''}`}>
                <ul>
                    <Link to={'/home'}>
                        <button className={activeLab === '/home' ? 'active' : ''}
                            onClick={() => { changeBackgroundImage(home, '/home'); }}>00 HOME
                        </button>
                    </Link>
                    <Link to={'/distanation'}>
                        <button className={activeLab === '/distanation' ? 'active' : ''}
                            onClick={() => { changeBackgroundImage(dist, '/distanation'); }}><li>01 DESTINATION</li>
                        </button>
                    </Link>
                    <Link to={'/crew'}>
                        <button className={activeLab === '/crew' ? 'active' : ''}
                            onClick={() => { changeBackgroundImage(crew, '/crew'); }}><li>02 CREW</li>
                        </button>
                    </Link>
                    <Link to={'/technology'}>
                        <button className={activeLab === '/technology' ? 'active' : ''}
                            onClick={() => { changeBackgroundImage(technology, '/technology'); }}><li>03 TECHNOLOGY</li>
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
