import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
    var settings = {
        dots: props.duo ? false : true,
        infinite: props.duo ? false : true,
        speed: 700,
        slidesToShow: props.show,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: props.autoplay ? true: false,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: props.show,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows: props.duo ? true : false,
                slidesToShow: props.show,
                slidesToScroll: 1,
                initialSlide: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: props.duo ? true : false,
                slidesToShow: props.show,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <Slider {...settings}>
            {props.children}
        </Slider> 
    )
}

export default Carousel
