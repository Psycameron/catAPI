import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "./custom-slider.css";
import styles from "./Slider.module.css";

export default function Slider({ images }) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      loop={true}
    >
      {images.map(({ id, url }) => (
        <SwiperSlide key={id}>
          <Image
            className={styles.image}
            src={url}
            alt={url}
            fill={true}
            sizes="640px"
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
