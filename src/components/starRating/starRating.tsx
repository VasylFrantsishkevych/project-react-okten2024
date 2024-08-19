'use client'

import { useState } from "react";
import {Rating} from "react-simple-star-rating";

const StarsRating = () => {

    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)

    }

    return (
        <div>
            <Rating
                onClick={handleRating}
                initialValue={rating}
                size={20}
                iconsCount={10}
                transition
                fillColor='#00d575'
                emptyColor='gray'
                className='foo'
            />
        </div>
    )
}
export default StarsRating;