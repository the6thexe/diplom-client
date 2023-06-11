import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel style={{width: '1300px', height: '960px', marginLeft: '0px'}} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="1.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{color: 'white'}}>
          <h3>Вы попали на WISP</h3>
          <p>Writer Inner System Pannel</p>
          <p>Приложение учета успеваемости учреждений образования.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Простота и удобство</h3>
          <p>
            Профессиональные возможности по любым силам
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="f1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Начало</h3>
          <p>
          Авторизуйтесь с помощью данных, предоставленных вашим администратором
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;