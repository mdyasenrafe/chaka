import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import Review from "../Review/Review";
import "./Reviews.css";

SwiperCore.use([Navigation]);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://chaka-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="py-5 container">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span className="">Our</span>
          <span className="text-red">Reviews</span>
        </h1>
      </div>
      <Swiper
        navigation={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="mySwiper"
      >
        {reviews.map((data) => (
          <SwiperSlide key={data._id}>
            <Review data={data}></Review>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
