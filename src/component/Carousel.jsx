import 'animate.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';
import Home1 from "../../src/assets/repair1.jpg";
import Home2 from "../../src/assets/repair2.jpg";
import Home3 from "../../src/assets/repair3.jpg";
import Home4 from "../../src/assets/repair4.jpg";
import Home5 from "../../src/assets/repair5.jpg";
export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: `url(${Home1})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content">
    <div className="text-left">
      <h1 className="lg:md:mb-5 lg:text-4xl md:text-3xl text-xl font-bold animate__animated animate__bounce animate__delay-2s">Repairing Electronics, <br />Restoring Connections</h1>
      <p className="mb-5 animate__animated animate__fadeInTopLeft animate__delay-2s">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: `url(${Home5})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content">
    <div className="text-left">
      <h1 className="lg:md:mb-5 lg:text-4xl md:text-3xl text-xl font-bold">Expert Electronic<br /> Repairs Done Right</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br />In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: `url(${Home2})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content">
    <div className="text-left">
      <h1 className="lg:md:mb-5 lg:text-4xl md:text-3xl text-xl font-bold">Your Trusted Electronic<br /> Repair Specialists</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.<br /> In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: `url(${Home3})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content">
    <div className="text-left">
      <h1 className="lg:md:mb-5 lg:text-4xl md:text-3xl text-xl font-bold">We Fix Electronics,<br /> You Get Peace of Mind</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.<br /> In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: `url(${Home4})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content">
    <div className="text-left">
      <h1 className="lg:md:mb-5 lg:text-4xl md:text-3xl text-xl font-bold">Restore. Repair. Reconnect.</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br />In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>
      
      </Swiper>
    </>
  );
}



    