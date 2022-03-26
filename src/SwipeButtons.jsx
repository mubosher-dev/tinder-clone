import React from "react";
import "./swipeButtons.css";

function swipeButtons() {
    return (
        <div className="swipeButtons_card">
            <button className="swiperButton">
                    <i class="fas fa-redo"></i>
            </button>
            <button className="swiperButton">
                 <i class="fas fa-times"></i>
            </button>
            <button className="swiperButton">
                 <i class="fas fa-star"></i>
            </button>
            <button className="swiperButton">
                 <i class="fas fa-heart"></i>
            </button>
            <button className="swiperButton">
                 <i class="fas fa-bolt"></i>
            </button>
        </div>
    )
}

export default swipeButtons;