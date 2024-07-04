import React from 'react';

function ExampleCarouselImage({ imagePath, text }) {
    return (
        <img
            className="d-block w-100"
            src={imagePath}
            alt={text}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
    );
}

export default ExampleCarouselImage;
