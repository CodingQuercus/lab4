import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";

export default function Nav() {

    const [open, setOpen] = useState(true);

    const toggleNav = () => {
        setOpen(!open)
    };

    return (
        <>
            <nav className="desktop-nav">
                <ul>
                    <li><Link to="/">Startsida</Link></li>
                    <li><Link to="/information">Information om discar</Link></li>
                    <li><Link to="/team">Team Micke's Discgolf</Link></li>
                    <li><Link to="/terms">Villkor och information</Link></li>
                    <li><Link to="/about">Om Micke's Discgolf</Link></li>
                    <li><Link to="/contact">Kontakta oss</Link></li>
                </ul>

            </nav>

            <nav className="phone-nav">
                <button className="open-btn" onClick={toggleNav}>
                    <img src="BilderSmaller/menu_black_36dp.svg" alt="Öppna navigationsmenyn" />
                </button>
                <div id="sidenav" className={open ? "" : "active"} >
                    <button className="close-btn" onClick={toggleNav}>
                        <img src="BilderSmaller/close_black_36dp.svg" alt="Stäng navigationsmenyn" />
                    </button>
                    <Link to="/">Startsida</Link>
                    <Link to="/information">Information om discar</Link>
                    <Link to="/team">Team Micke's Discgolf</Link>
                    <Link to="/terms">Villkor och information</Link>
                    <Link to="/about">Om Micke's Discgolf</Link>
                    <Link to="/contact">Kontakta oss</Link>
                </div>
            </nav>
        </>
    )
}