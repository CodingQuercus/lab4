import React from "react";

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer>
            <p className="company-info">
                Micke's Discgolf
                <br />
                Roddargatan 15
                <br />
                931 54 Skellefteå
            </p>
            <p className="company-info">
                info@mickesdiscgolf.se
                <br />
                072 732 77 80
                <br />
                Villkor och information
            </p>
            <a href="https://www.facebook.com/profile.php?id=100057709237878">
                <figure>
                    <img src="Bilder/facebook.png" alt="Facebook Mickes's Discgolf" className="social" />
                </figure>
            </a>
            <a href="video.html">Länk till video</a>
            <button className="top-btn" onClick={scrollToTop}>
                <img src="BilderSmaller/arrow_upward_FILL0_wght400_GRAD0_opsz40.svg"
                    alt="Klicka för att scrolla till toppen" />
            </button>
        </footer>
    )
}
