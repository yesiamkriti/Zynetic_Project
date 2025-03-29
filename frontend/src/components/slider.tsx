import React from 'react'
import { Carousel } from 'react-bootstrap'

// Define an array of image URLs
const images: string[] = [
  '.././public/images/pd14 (1).png',
  '.././public/images/pd14 (3).png',
  '.././public/images/pd14 (2).png',
]

const BootstrapCarousel: React.FC = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 h-50"
            src={image}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h3>Slide {index + 1}</h3>
            <p>Description for Slide {index + 1}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default BootstrapCarousel
