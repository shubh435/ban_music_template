import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPrinter,
  AiFillSignal,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "./App.css";
import Headers from "./Components/Headers";
import Slider from "./Components/Slider";

function App() {
  return (
    <div>
      <Headers />
      <Slider />

      <section className="band">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="title text-center text-3xl">The band</h3>
            <p className="text-[#ccc] text-2xl">We love music</p>
          </div>

          <div className="mt-2">
            <p className="text-justify sm:mx-auto sm:px-2 ">
              We have created a fictional band website. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="images">
            <div className="flex flex-wrap justify-between  mt-12 mb-12 items-center">
              <div className="lg:w-[30%]  md:w-[50%] sm:w-[100%] mx-auto sm:flex sm:justify-center  md:mx-auto my-5 sm:mt-5">
                <img
                  src="https://www.w3schools.com/w3images/bandmember.jpg"
                  alt="img"
                  className="contain"
                />
              </div>
              <div className=" lg:w-[30%]  md:w-[50%] sm:w-[100%] mx-auto sm:flex sm:justify-center  md:mx-auto my-5 sm:mt-5">
                <img
                  src="https://www.w3schools.com/w3images/bandmember.jpg"
                  alt="img"
                  className="contain"
                />
              </div>
              <div className="lg:w-[30%]  md:w-[50%] sm:w-[100%] mx-auto sm:flex sm:justify-center  md:mx-auto my-5 sm:mt-5">
                <img
                  src="https://www.w3schools.com/w3images/bandmember.jpg"
                  alt="img"
                  className="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto container max-w-3xl py-16">
          <h3 className="text-4xl text-center mb-12 ">TOUR DATES </h3>
          <p className="text-center mb-12">Remember to book your tickets!</p>

          <div className="bg-white w-full text-black">
            <div className="flex border-b-2  gap-3 p-2 border-[#ccc]">
              <p>september</p>
              <button className="bg-red-500 text-white">sold out</button>
            </div>
            <div className="flex border-b-2 gap-3 p-2 border-[#ccc]">
              <p>october</p>
              <button className="bg-red-500 text-white">sold out</button>
            </div>
            <div className="flex border-b-2 gap-3 p-2 border-[#ccc]">
              <p>noveber</p>
            </div>
          </div>

          <div className="images">
            <div className="flex flex-wrap justify-between  mt-12 items-center w-full">
              <div
                className="m-1 lg:w-[30%]  md:w-[40%] sm:w-[100%] sm:mx-auto  sm:mt-5 sm:flex-col mx-auto sm:flex sm:justify-center
 bg-white min-h-max pb-8 text-black p-0 text-center"
              >
                <img
                  src="https://www.w3schools.com/w3images/newyork.jpg"
                  alt="img"
                  className="contain"
                />
                <h3 className="text-xl font-bold my-2">Newyork</h3>
                <h3 className="text-xl font-light text-[#ccc] my-2">
                  Fri 27 Nov 2016
                </h3>
                <p className="text-left ml-1">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  className="p-2 mx-auto w-[50%] text-white py-1 mt-2
                 bg-red-500"
                >
                  Buy tickets
                </button>
              </div>
              <div className="m-1  lg:w-[30%]  md:w-[40%] sm:w-[100%] sm:mx-auto  sm:flex sm:justify-center  sm:mt-5 sm:flex-col mx-auto  bg-white min-h-max pb-8 text-black p-0 text-center ">
                <img
                  src="https://www.w3schools.com/w3images/paris.jpg"
                  alt="img"
                  className="contain"
                />
                <h3 className="text-xl font-bold my-2">paris</h3>
                <h3 className="text-xl font-light text-[#ccc] my-2">
                  Fri 27 Nov 2016
                </h3>
                <p className="text-left ml-1">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  className="p-2 mx-auto w-[50%] text-white py-1 mt-2
                 bg-red-500"
                >
                  Buy tickets
                </button>
              </div>
              <div className=" m-1 lg:w-[30%]  md:w-[40%] sm:w-[100%] sm:mx-auto  sm:flex sm:justify-center sm:mt-5 sm:flex-col mx-auto  bg-white min-h-max pb-8 text-black p-0 text-center">
                <img
                  src="https://www.w3schools.com/w3images/sanfran.jpg"
                  alt="img"
                  className="contain"
                />
                <h3 className="text-xl font-bold my-2">san fransisco</h3>
                <h3 className="text-xl font-light text-[#ccc] my-2">
                  Fri 27 Nov 2016
                </h3>
                <p className="text-left ml-1">
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button
                  className="p-2 mx-auto w-[50%] text-white py-1 mt-2
                 bg-red-500"
                >
                  Buy tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact py-16">
        <div className="title text-center">
          <h1 className="text-2xl font-bold mb-10">CONTACT</h1>
          <p className="mb-10">Fan/Draop a note</p>
        </div>
        <div className="container mx-auto max-w-3xl row  flex flex-wrap justify-between">
          <div className="md:w-[30%] sm:w-[100%]  mx-auto">
            <i className="fa fa-map-marker"></i> Chicago, US
            <br />
            <i className="fa fa-phone"></i> Phone: +00 151515
            <br />
            <i className="fa fa-envelope"> </i> Email: mail@mail.com
          </div>
          <div className="md:w-[60%] sm:w-[100%] mx-auto">
            <form>
              <div className="flex flex-wrap justify-between ">
                <div className="w-[40%]">
                  <input
                    className="border--solid"
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                  />
                </div>
                <div className="w-[40%]">
                  <input
                    className="border--solid"
                    type="text"
                    placeholder="Email"
                    required
                    name="Email"
                  />
                </div>
              </div>
              <div className="w-full">
                <input
                  className="border--solid w-full"
                  type="text"
                  placeholder="Message"
                  required
                  name="Message"
                />
              </div>
              <button
                className="border--button flex justify-center w-full"
                type="submit"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="images w-full  ">
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          className="w-full md:h-screen sm:h-full"
          alt=""
        />
      </section>

      <section className="footer py-16">
        <footer>
          <div className="flex justify-center gap-3">
            {" "}
            <AiFillFacebook className="w-5 h-5 rounded-md  hover:opacity-[0.5]" />
            <AiFillInstagram className="w-5 h-5 rounded-md  hover:opacity-[0.5]" />
            <AiFillSignal className="w-5 h-5 rounded-md  hover:opacity-[0.5]" />
            <AiFillPrinter className="w-5 h-5 rounded-md  hover:opacity-[0.5]" />
            <AiFillTwitterSquare className="w-5 h-5 rounded-md  hover:opacity-[0.5]" />
            <AiFillLinkedin className="w-5 h-5 rounded-md  hover:opacity-[0.5]" />
          </div>

          <p className="text-center mt-5">
            Powered by
            <a href="/" target="_blank">
              shubham
            </a>
          </p>
        </footer>
      </section>
    </div>
  );
}

export default App;
