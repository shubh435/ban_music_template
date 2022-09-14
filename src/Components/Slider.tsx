import React, { Component } from "react";
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
let timer: any;

export default class Slider extends Component<any, any> {
  state = {
    counter: 0,
  };
  afterInterval = async (arr: any, i: number) => {
    timer = setInterval(async () => {
      if (this.state.counter >= arr.length - 1) {
        await this.setState({ counter: 0 });
      } else {
        await this.setState({ counter: this.state.counter + 1 });
      }
    }, 6000);
  };
  componentDidMount() {
    try {
      this.afterInterval(ImageData, 0);
    } catch (error) {
      console.log(error);
      clearInterval(timer);
    }
  }
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide relative sm:!h-[100%] sm:w-full mb-10"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden lg:h-[95vh]  sm:h-full">
          <div className="carousel-item active relative float-left w-full">
            <img
              src={ImageData[this.state.counter].url}
              className={"w-full block"}
              alt={ImageData[this.state.counter].alt}
            />
          </div>
        </div>
      </div>
    );
  }
}
