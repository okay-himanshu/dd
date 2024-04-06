import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import { PiInstagramLogoBold } from "react-icons/pi";
import { SiFacebook } from "react-icons/si";
import bimg11 from "../subassets/bagris images/New folder/wallpaper.jpg";
import bimg12 from "../subassets/bagris images/New folder/wallpaper1.jpg";
import bimg14 from "../subassets/bagris images/New folder/wallpaper2.jpg";
import bimg17 from "../subassets/bagris images/New folder/wallpaper3.jpg";
import bimg23 from "../subassets/bagris images/New folder/wallpaper4.jpg";
import bimg24 from "../subassets/bagris images/New folder/wallpaper5.jpg";
import bimg25 from "../subassets/bagris images/New folder/wallpaper6.jpg";
import bimg26 from "../subassets/bagris images/New folder/wallpaper7.jpg";
import bimg27 from "../subassets/bagris images/New folder/wallpaper8.jpg";
import Activities from "./Activities";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const images = [
    { name: "pic-1", src: bimg11 },
    { name: "pic-2", src: bimg12 },
    // { name: "pic-3", src: bimg14 },
    { name: "pic-4", src: bimg17 },
    { name: "pic-4", src: bimg23 },
    { name: "pic-4", src: bimg24 },
    { name: "pic-4", src: bimg25 },
    { name: "pic-4", src: bimg26 },
    { name: "pic-4", src: bimg27 },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentSlide, handleNext, handlePrev]);
  return (
    <>
      <div
        className=" relative mx-auto overflow-hidden max-w-screen-xl  "
        style={{ zIndex: "-1" }}
      >
        <div
          className=" w-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full select-none object-cover"
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-60 sm:h-[35rem] md:h-[40rem] object-cover -z-30"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="parents">
        ;
        <section className=" flex mt-10 flex-col md:flex-row justify-center items-center px-1 sm:px-20  gap-7 mb-20">
          <div>
            <h2 className="font-custom heading ">
              Unveiling Timeless Stories Through My Lens
            </h2>
            <p className="font-custom paragraph">
              "Discover a visual journey beyond the ordinary at.
              <br />
              Our lens doesn't just freeze moments; it distills the very essence
              of emotions, weaving a tapestry of stories in every frame.
              <br /> Embrace the art of storytelling through captivating
              imagery,
              <br />
              where each photograph is a portal to a cherished memory. Join us
              in celebrating life's extraordinary moments,
              <br /> beautifully encapsulated in pixels. Welcome to a world
              where passion <br />
              meets precision, and each click is a timeless expression of the
              soul. Explore, experience, and let your story unfold
              <br /> in the enchanting gallery of Captured Essence".
            </p>
          </div>

          <div className="flex items-center justify-center ">
            <img
              src={bimg25}
              alt="img"
              className="w-[18rem] sm:w-[22rem] xl:w-[40rem] 2xl:w-[60rem] rounded-md object-cover"
            />
          </div>
        </section>
        <section className="flex flex-col gap-2 items-center ">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <img
                src={bimg11}
                alt="img"
                className="w-full sm:w-60 md:w-80 lg:w-[30rem]"
                style={{ filter: "brightness(40%)" }}
              />
              <button
                onClick={() => navigate("/pre-wedding")}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  outline-none border border-white px-2 py-1.5 bg-transparent text-white rounded-md hover:bg-white hover:text-black"
              >
                view more
              </button>
            </div>

            <div className="relative">
              <img
                src={bimg12}
                alt="img"
                className="w-full sm:w-60 md:w-80 lg:w-[30rem]"
                style={{ filter: "brightness(40%)" }}
              />
              <button
                onClick={() => navigate("/post-wedding")}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  outline-none border border-white px-2 py-1.5 bg-transparent text-white rounded-md hover:bg-white hover:text-black"
              >
                view more
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <img
                src={bimg14}
                alt="img"
                className="w-full sm:w-60 md:w-80 lg:w-[30rem]"
                style={{ filter: "brightness(40%)" }}
              />
              <button
                onClick={() => navigate("/wedding")}
                className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none border border-white px-2 py-1.5 bg-transparent text-white rounded-md hover:bg-white hover:text-black"
              >
                view more
              </button>
            </div>
            <div className="relative">
              <img
                src={bimg23}
                alt="img"
                className="w-full sm:w-60 md:w-80 lg:w-[30rem]"
                style={{ filter: "brightness(40%)" }}
              />
              <button
                onClick={() => navigate("/photography")}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  outline-none border border-white px-2 py-1.5 bg-transparent text-white rounded-md hover:bg-white hover:text-black"
              >
                view more
              </button>
            </div>
          </div>
        </section>
        <div className="quote">
          <h2 className="font-custom">
            "Through the lens of life, every moment is a masterpiece <br />
            waiting to be captured, painting the canvas
            <br /> of memories with the brushstrokes of light and shadow."
          </h2>
          <span className="span">-</span>{" "}
          <p className="font-custom">Roland Barthes</p>
        </div>
        <div className="text-center mt-52 w-450:mt-32 font-custom">
          <h1 className="text-3xl ">Follow us </h1>
          <div className="flex  justify-center mr-12">
            {" "}
            <PiInstagramLogoBold
              className="mt-1 ml-8  text-3xl hover:cursor-pointer hover:scale-110"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/bajrang_bagri_photography/",
                  "_blank"
                )
              }
            />
            <SiFacebook
              className="mt-1 ml-3 text text-3xl hover:cursor-pointer hover:scale-110"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100063942240303",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <Activities />
      </div>
    </>
  );
};

export default Home;

//
