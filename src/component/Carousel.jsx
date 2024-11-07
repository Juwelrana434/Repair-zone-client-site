import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Home1 from "../../src/assets/repair1.jpg";
import Home2 from "../../src/assets/repair2.jpg";
import Home3 from "../../src/assets/repair3.jpg";
import Home4 from "../../src/assets/repair4.jpg";
import Home5 from "../../src/assets/repair5.jpg";

export default function Carousel() {
  return (
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
      {[Home1, Home2, Home3, Home4, Home5].map((image, index) => (
        <SwiperSlide key={index}>
          <div 
            className="hero min-h-screen" 
            style={{ backgroundImage: `url(${image})` }} 
            role="img" 
            aria-label="Repair services background image"
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
              <div className="text-left">
                <h1 className="lg:md:mb-5 lg:text-4xl md:text-3xl text-xl font-bold animate__animated animate__bounce animate__delay-2s">
                  {index === 0 ? "Repairing Electronics, Restoring Connections" : index === 1 ? "Expert Electronic Repairs Done Right" : index === 2 ? "Your Trusted Electronic Repair Specialists" : index === 3 ? "We Fix Electronics, You Get Peace of Mind" : "Restore. Repair. Reconnect."}
                </h1>
                {/* <p className="mb-5 animate__animated animate__fadeInTopLeft animate__delay-2s">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p> */}
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
