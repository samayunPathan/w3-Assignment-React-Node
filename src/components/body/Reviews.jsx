import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Reviews = () => {
    return (
        <div style={{margin:'30px'}}>
            <hr></hr>
            <div class="reviews" style={{margin:'30px'}}>
                
                <h2>No reviews (yet)</h2>
                <div class="review-count">
                    <span class="star"><FontAwesomeIcon icon="fa-solid fa-star" /></span>
                    <span>This host has 310 reviews for other places to stay. <span class="show-reviews">Show other
                        reviews</span></span>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Reviews