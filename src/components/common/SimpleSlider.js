import React from 'react'
import SliderItem from '../Carousel/SliderItem/SliderItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"


class SimpleSlider extends React.Component {
    render() {
    const { data } = this.props
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 
      };
      return (
        <Slider {...settings}>
             {data.map((item, index)=><SliderItem key = {index} {...item}/>)}
        </Slider>
      );
    }
  }

export default SimpleSlider
