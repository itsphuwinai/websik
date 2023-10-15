import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./../../css/caraousel.css"
import carousel1 from './../../IMG/2.png'
import carousel2 from './../../IMG/3.png'
import carousel3 from './../../IMG/4.png'
// import carousel4 from './../../IMG/carousel4.jpg'
// import carousel5 from './../../IMG/carousel5.jpg'
// import carousel6 from './../../IMG/carousel6.jpg'
// import carousel7 from './../../IMG/carousel7.jpg'
import { ArrowLeft, ArrowRight } from "../../SVG/Svg";

const Caraousel = () =>{
    return(
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
        visibleSlides={1}
        currentSlide={1}
        className="border p-1 rounded-xl shadow-2xl"
      >
        <Slider>
          <Slide index={0}><img className="rounded-l brightness-50 hover:brightness-100 " alt="..." src={carousel1}/></Slide>
          <Slide index={1}><img className="rounded-l brightness-50 hover:brightness-100 " alt="..." src={carousel2}/></Slide>
          <Slide index={2}><img className="rounded-l brightness-50 hover:brightness-100 " alt="..." src={carousel3}/></Slide>
          {/* <Slide index={3}><img className="rounded-xl brightness-50 hover:brightness-100 " alt="..." src={carousel4}/></Slide>
          <Slide index={4}><img className="rounded-xl brightness-50 hover:brightness-100 " alt="..." src={carousel5}/></Slide>
          <Slide index={5}><img className="rounded-xl brightness-50 hover:brightness-100 " alt="..." src={carousel6}/></Slide>
          <Slide index={6}><img className="rounded-xl brightness-50 hover:brightness-100 " alt="..." src={carousel7}/></Slide> */}
        </Slider>
        <ButtonBack className="w-[20%] bg-blue-300"><ArrowLeft/></ButtonBack>
        <ButtonNext className="w-[20%] bg-blue-300 absolute right-0"><ArrowRight/></ButtonNext>
        {/* <button class="next-button">next</button> */}
      </CarouselProvider>
    )
}

export default Caraousel