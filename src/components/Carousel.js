import React from "react";

import { useState } from "react";

function Carousel() {

    const[index, setIndex] = useState(0);
    
    const images = [
        {
            img: "./Bilder/discmania.png",
            alt: "Discmania nyheter"
        },
        {
            img: "./Bilder/bags.png",
            alt: "Latitude64 väskor"
        },
        {
            img: "./Bilder/paradigm.png",
            alt: "Discmania Paradigm"
        }
    ]

    function prevImg() {
        var newIndex = index;

        if(newIndex === 0) {
            newIndex = images.length - 1; 
        } else {
            newIndex = index - 1;
        }
        setIndex(newIndex)
    }

    function nextImg() {
        var newIndex = index;

        if(newIndex === images.length - 1) {
            newIndex = 0;
        } else {
            newIndex = index + 1;
        }
        setIndex(newIndex);
    }

    return (
        <div className="main-image">
            <img src={images[index].img} alt={images[index].alt} className="image" />
            <div className="carousel-buttons">
                <button className="prev" onClick={prevImg}>&#8656;</button>
                <button className="next" onClick={nextImg}>&#8658;</button>
            </div>
        </div>
    )
}

export default Carousel;