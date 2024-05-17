import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle
            subHeading={'---From 11:00am to 10:00pm---'}
            Heading={'ORDER ONLINE'}
            >

            </SectionTitle>
        <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className=' text-lg lg:text-3xl text-center -mt-16 font-bold uppercase text-white'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className=' text-3xl text-center -mt-16 font-bold uppercase text-white font-cinzel'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className=' text-3xl text-center -mt-16 font-bold uppercase text-white'>pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className=' text-3xl text-center -mt-16 font-bold uppercase text-white'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className=' text-3xl text-center -mt-16 font-bold uppercase text-white'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className=' text-3xl text-center -mt-16 font-bold uppercase text-white'>Soup</h1>
        </SwiperSlide>
       
      </Swiper>
      
      </div>
    );
};

export default Category;