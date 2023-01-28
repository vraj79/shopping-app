import React from "react";
import Products from "./Products";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
const slideData = [
  {
    id: 1,
    url:
      "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png",
  },
  {
    id: 2,
    url:
      "https://img.freepik.com/free-photo/full-length-portrait-happy-family_171337-2281.jpg?w=2000",
  },
  {
    id: 3,
    url:
      "https://img.freepik.com/free-photo/two-happy-girls-sweaters-having-fun-with-shopping-trolley-megaphone-white-wall_171337-2714.jpg?w=740&t=st=1672145849~exp=1672146449~hmac=8e0781cde2c5eb399faf35a118a732d909d24fc5f20af2572c36bfc49417ede1",
  },
  {
    id: 8,
    url:
      "https://img.freepik.com/free-photo/stylish-young-woman-posing-with-shopping-bags-after-great-shopping_176420-9041.jpg?w=740&t=st=1672145769~exp=1672146369~hmac=d2d8fc684bb13b986dc833044f50b26e0295ac28a955065626c1352d6a813eac",
  },
  {
    id: 9,
    url:
      "https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?w=826&t=st=1672145742~exp=1672146342~hmac=a256c36817149701c1b57e04562242cc9acd0c737d625e9660e8e40a4be5b688",
  },
  {
    id: 10,
    url:
      "https://img.freepik.com/free-photo/medium-shot-woman-local-retail_23-2149313476.jpg?t=st=1672141993~exp=1672142593~hmac=287dcf8ac837e53c3c5abba5a63304b74b8581e5b8d740e07974ab061f76e1df",
  },
  {
    id: 11,
    url:
      "https://img.freepik.com/free-photo/blond-pretty-woman-pink-shirt-jeans-smiling-jumping-pink-isolated-having-fun-holding-shopping-bags_285396-10526.jpg?t=st=1672141993~exp=1672142593~hmac=cb4ca474172716219e36a94c601140328c2a68393a9368d6c8ff01b66b4e78fe",
  },
  {
    id: 12,
    url:
      "https://img.freepik.com/free-photo/cheerful-happy-thai-asian-woman-enjoying-shopping_74952-1107.jpg?w=740&t=st=1672145570~exp=1672146170~hmac=106077324cadfca04cfaf8d6e54aa08e28dd628db87bc1425255808f76f47a61",
  },
];
const Homepage = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
          >
            {slideData.map((ele) => (
              <SwiperSlide key={ele.id}>
                <img
                  className="d-block m-auto"
                  height={"500px"}
                  width={"80%"}
                  src={ele.url}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Homepage;
