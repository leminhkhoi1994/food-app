import React, { memo } from 'react';
import Slider from 'react-slick';
import FoodCarousel1 from 'assets/images/FoodCarousel1.png';
import FoodCarousel2 from 'assets/images/FoodCarousel2.png';
import FoodCarousel3 from 'assets/images/FoodCarousel3.png';
import FoodCarousel4 from 'assets/images/FoodCarousel4.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

const FoodCarousel = ({carouselData}) => {
  const foodItems = [
    {
      id: 1,
      image: FoodCarousel1,
      title: 'Case title',
      subtitle: 'Case sous-titre',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      image: FoodCarousel2,
      title: 'Case title',
      subtitle: 'Case sous-titre',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      image: FoodCarousel3,
      title: 'Case title',
      subtitle: 'Case sous-titre',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      image: FoodCarousel4,
      title: 'Case title',
      subtitle: 'Case sous-titre',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h1 className="carousel-title">{carouselData.title}</h1>
        <a href="#" className="learn-more">
        {carouselData.more_info} <span className="arrow">→</span>
        </a>
      </div>

      <Slider {...settings}>
        {carouselData.cases.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="item-image-container">
              <img
                src={index === 0 ? FoodCarousel1 : index === 1 ? FoodCarousel2 : index === 2 ? FoodCarousel3 : FoodCarousel4}
                className="item-image"
              />
            </div>
            <div className="item-content">
              <h3 className="item-title">{item.category}</h3>
              <h2 className="item-subtitle">{item.tagline}</h2>
              <p className="item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FoodCarousel;
