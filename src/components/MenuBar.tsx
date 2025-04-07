import React from 'react';

const MenuBar: React.FC = () => {
    return (
        <div className="menuBar">
            <ul className="menu-bar">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default MenuBar;
