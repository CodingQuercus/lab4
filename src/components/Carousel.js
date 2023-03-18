import React from "react";

import { useState } from "react";

import images from "../data/Images"

function Carousel() {

    const[index, setIndex] = useState(0);

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