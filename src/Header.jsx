import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
           <button className="header_icons-button">
                <i className="fas fa-user fa-2x header_icons">
                </i>
            </button>

            <img src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="logo" className="header_logo" />

            <button className="header_icons-button">
                <i className="fas fa-comments fa-2x header_icons"></i>
            </button>
                
        </div>
    )
}

export default Header;