import React from "react";
import "./navbar.css"

function Navbar() {
    return (
        <div>
            <header className='navbar'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#rsvp'>RSVP</a></li>
                    <li><a href='#gallery'>Gallery</a></li>
                    <li><a href='#gift-registry'>Gift Registry</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar;