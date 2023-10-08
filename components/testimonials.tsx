import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from "./testimonialCard";

SwiperCore.use([Navigation]);

export default () => {
  return (
    <Swiper
    spaceBetween={200}
    loop={true}
    slidesPerView={1}
    navigation
    speed={300}
    effect={"slide"}
    centeredSlides={true}
    autoHeight={true}
    autoplay={true}
    loopAdditionalSlides={4}
    onSlideChange={() => {}}
    onSwiper={(swiper) => { setInterval(() => {swiper.slideNext(1000) }, 5000)} }>
        <SwiperSlide>
            <TestimonialCard 
                author="Philip Ruiz"
                authorJob="Restaurant Owner"
                authorComment="I personally thank Goldenhand Software for the outstanding product. We can't understand how we've been living without a delivery web app. Really good."
                authorImage="/Philip.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialCard 
                author="Isabella Steele"
                authorJob="Estate Agent"
                authorComment="I strongly recommend Goldenhand Software to EVERYONE interested in running a successful online estate agency business!"
                authorImage="/Isabella.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialCard 
                author="Jack Pridgeon"
                authorJob="Mechanic"
                authorComment="The service was excellent. I would also like to say thank everyone from Goldenhand Software. The business outcome is worth much more than I paid."
                authorImage="/Jack.jpg" />
        </SwiperSlide>
    </Swiper>
  );
};