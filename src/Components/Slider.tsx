import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
const ImageData = [
  {
    id: 1,
    url: "https://www.w3schools.com/w3images/la.jpg",
    isHidden: true,
    alt: "",
  },
  {
    id: 2,
    url: "https://www.w3schools.com/w3images/chicago.jpg",
    isHidden: false,
    alt: "",
  },
  {
    id: 3,
    url: "https://www.w3schools.com/w3images/ny.jpg",
    isHidden: true,
    alt: "",
  },
];
const afterInterval = (arr: any, i: number) => {
  arr[i].isHidden = false;
};
export default class Slider extends Component {
  render() {
    afterInterval(ImageData, 1);
    console.log(ImageData);
    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide relative sm:!h-[100%] sm:w-full mb-10"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden lg:h-[95vh]  sm:h-full">
          {ImageData.map((images: any) => {
            return (
              <div className="carousel-item active relative float-left w-full">
                <img
                  src={images.url}
                  className={`w-full ${images.isHidden ? "hidden" : "block"}`}
                  alt={images.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
