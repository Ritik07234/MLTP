import React from 'react';
import './Footer.css';

const Footer = ({ left = 250, width = 1190 }) => (
    <div className="footer-area" style={{ left: left + 'px', width: width + 'px' }}>
        Footer Area
    </div>
);

export default Footer; 