import React from 'react';
import './Learned.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Learned = () => {
    return (
        <div id='learned' className='learned'>
            <div className="learned-title">
                <h1>What I learned?</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="learned-container">
                {Services_data.map((service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Learned;