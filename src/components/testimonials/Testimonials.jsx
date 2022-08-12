import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: AVT1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsum, quia dolor velit quae corrupti suscipit assumenda magni deleniti veniam quisquam atque quas quasi harum odio adipisci ducimus maxime animi?",
  },
  {
    avatar: AVT2,
    name: "Vinti Bard",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem deleniti minus dolores libero corporis temporibus sed animi, commodi, iste esse at perspiciatis consequatur nemo sit molestias id cupiditate recusandae aperiam.",
  },
  {
    avatar: AVT3,
    name: "Kaedehara Kazuha",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laborum suscipit voluptate possimus repudiandae ratione impedit autem explicabo nesciunt esse nisi veritatis, maiores facere aliquam vitae. Magnam dolor nisi dignissimos?",
  },
  {
    avatar: AVT4,
    name: "Kamisato Ayaka",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium officia sed optio facilis eum nesciunt, rerum et provident nihil natus, voluptate minus odio asperiores assumenda autem quae inventore temporibus saepe.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="clients__name">{name}</h5>
              <small className="clients__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
