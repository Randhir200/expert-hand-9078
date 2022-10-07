import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const Img=[
      require("../../Images/SliderImages/logo2.jpg"),
      require("../../Images/SliderImages/logo3.jpg"),
      require("../../Images/SliderImages/logo4.jpg"),
      require("../../Images/SliderImages/logo5.jpg"),
      require("../../Images/SliderImages/logo6.jpg"),
      require("../../Images/SliderImages/logo7.jpg"),
      require("../../Images/SliderImages/logo8.jpg"),
      require("../../Images/SliderImages/logo9.jpg"),
      require("../../Images/SliderImages/logo10.jpg"),
      require("../../Images/SliderImages/logo11.jpg"),
    ]
    return (
      <Box width="80%" margin="auto">
        
        <Slider {...settings}>
          <Box><Image src={Img[0]} /></Box>
          <Box><Image src={Img[1]} /></Box>
          <Box><Image src={Img[2]} /></Box>
          <Box><Image src={Img[3]} /></Box>
          <Box><Image src={Img[4]} /></Box>
          <Box><Image src={Img[5]} /></Box>
          <Box><Image src={Img[6]} /></Box>
          <Box><Image src={Img[7]} /></Box>
          <Box><Image src={Img[8]} /></Box>
          <Box><Image src={Img[9]} /></Box>
          <Box><Image src={Img[10]} /></Box>
        </Slider>
      </Box>
    );
  }
}