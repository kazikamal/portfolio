
import './Hero.css';
import profile_img from '../../assets/profile_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div id='hero' className='hero'>
            <img src={profile_img} alt="Circular Image" />
            <h1><span>Hi! I'm Kamal,</span> frontend developer</h1>
            <p>I'm a frontend developer from Bangladesh</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    );
};

export default Hero;