import SectionTitle from "../SectionTitle";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactStars from "react-rating-stars-component";
import qoute from '../../assets/icon/quote.png'
const Testimonials = () => {
    return (
        <div >
            <SectionTitle
            subHeading={'---What Our Clients Say---'}
            Heading={'TESTIMONIALS'}
            ></SectionTitle>
            <div className=" w-1/2 mx-auto">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  
            <div>
           <div className=" flex justify-center ">
           <ReactStars
    count={5}
    size={100}
    activeColor="#BB8506"
            />
            
           </div>
           <img  className="w-16 flex justify-center items-center mx-auto" src={qoute} alt="" />
                <p className="text-center font-semibold">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <h1 className=" text-center text-orange-500 text-3xl font-semibold">JANE DOE</h1>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>  
            <div>
           <div className=" flex justify-center ">
           <ReactStars
    count={5}
    size={100}
    activeColor="#BB8506"
            />
            
           </div>
           <img  className="w-16 flex justify-center items-center mx-auto" src={qoute} alt="" />
                <p className="text-center font-semibold">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <h1 className=" text-center text-orange-500 text-3xl font-semibold">JANE DOE</h1>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>  
            <div>
           <div className=" flex justify-center ">
           <ReactStars
    count={5}
    size={100}
    activeColor="#BB8506"
            />
            
           </div>
           <img  className="w-16 flex justify-center items-center mx-auto" src={qoute} alt="" />
                <p className="text-center font-semibold">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <h1 className=" text-center text-orange-500 text-3xl font-semibold">JANE DOE</h1>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>  
            <div>
           <div className=" flex justify-center ">
           <ReactStars
    count={5}
    size={100}
    activeColor="#BB8506"
            />
            
           </div>
           <img  className="w-16 flex justify-center items-center mx-auto" src={qoute} alt="" />
                <p className="text-center font-semibold">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <h1 className=" text-center text-orange-500 text-3xl font-semibold">JANE DOE</h1>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>  
            <div>
           <div className=" flex justify-center ">
           <ReactStars
    count={5}
    size={100}
    activeColor="#BB8506"
            />
            
           </div>
           <img  className="w-16 flex justify-center items-center mx-auto" src={qoute} alt="" />
                <p className="text-center font-semibold">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <h1 className=" text-center text-orange-500 text-3xl font-semibold">JANE DOE</h1>
            </div>
        </SwiperSlide>
       
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;