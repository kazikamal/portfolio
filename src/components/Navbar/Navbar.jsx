import { useRef, useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
    const [menu,setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right = "0";
        
    }
    const closeMenu = () =>{
        menuRef.current.style.right = "350px";
        
    }
    return (
        <div id='navbar' className='navbar'>
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
            <ul className='nav-menu' ref={menuRef}>
                <img className='nav-mob-close' onClick={closeMenu} src={menu_close} alt="" />
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Learned</p></AnchorLink>{menu==="services"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=""/>:<></>}</li>
                <li><a href=""></a></li>
            </ul>
            <div className="nav-connect">
            <a href="https://www.linkedin.com/in/kazi-kamal-aa33b2170/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
            </div>
        </div>
    );
};

export default Navbar;