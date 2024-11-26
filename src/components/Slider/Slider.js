import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./Slider.css";

const Slider = () => {
  return (
    <Swiper
      style={{ width: "100%", height: "500px", margin: "auto" }}
      modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
    >
      <SwiperSlide>
        <img
          src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
          alt="Slide 1"
        />
        <div className="slide-content">
          <h1>헬로</h1>
          <p>슬라이드 1의 설명입니다.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13262118&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMC8yMS9DTFMxMDAwNi82MmZhMWExMy03ZjRmLTQ1NWMtYTZlNy02ZTk2YjhjMjBkYTk=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006"
          alt="Slide 2"
        />
        <div className="slide-content">
          <h1>두 번째 슬라이드</h1>
          <p>슬라이드 2의 설명입니다.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg"
          alt="Slide 3"
        />
        <div className="slide-content">
          <h1>세 번째 슬라이드</h1>
          <p>슬라이드 3의 설명입니다.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
