import React, { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const arrNavbar = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Band",
    url: "/",
  },
  {
    id: 3,
    title: "Tour",
    url: "/",
  },
  {
    id: 4,
    title: "Contact",
    url: "/",
  },
];
const dropDownArr = [
  {
    id: 1,
    title: "Merchandise",
    url: "/",
  },
  {
    id: 2,
    title: "Extras",
    url: "/",
  },
  {
    id: 3,
    title: "Media",
    url: "/",
  },
];

interface State {
  openNavabar: boolean;
  openDropDown: boolean;
}

export default class Headers extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      openNavabar: false,
      openDropDown: false,
    };
  }
  render() {
    return (
      <section>
        <nav className="px-2 bg-black border-gray-200">
          <div className=" flex flex-wrap justify-between items-center mx-auto">
            <button
              type="button"
              className="inline-flex justify-center items-center ml-3
     text-gray-400 rounded-lg md:hidden hover:text-gray-900 
     focus:outline-none focus:ring-2 focus:ring-blue-300
      dark:text-gray-400 dark:hover:text-white 
      dark:focus:ring-gray-500"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() =>
                this.setState({ openNavabar: !this.state.openNavabar })
              }
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={` w-full md:flex md:items-center md:w-full  ${
                this.state.openNavabar ? "flex" : "hidden"
              }`}
              id="mobile-menu"
            >
              <ul className="flex flex-col mt-4 bg-transparent rounded-lg border   border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent text-white ">
                {arrNavbar.map((navs: any) => {
                  return (
                    <li key={navs.id} className="hover:bg-slate-300 p-4  ">
                      <a
                        href={navs.url}
                        className="block py-2 pr-4 pl-3 text-white rounded md:p-0   md:dark:bg-transparent"
                        aria-current="page"
                      >
                        {navs.title}
                      </a>
                    </li>
                  );
                })}

                <li className="hover:bg-slate-300 p-4  !relative ">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    onClick={() =>
                      this.setState({ openDropDown: !this.state.openDropDown })
                    }
                  >
                    More
                    <svg
                      className="ml-1 w-5 h-5"
                      aria-hidden="false"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdownNavbar"
                    className={`z-10 w-44 font-normal  !absolute top-10 shadow-lg left-0  rounded divide-y divide-gray-100  dark:bg-gray-700 dark:divide-gray-600 ${
                      this.state.openDropDown ? "flex" : "hidden"
                    }`}
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-400 "
                      aria-labelledby="dropdownLargeButton"
                    >
                      {dropDownArr.map((drops: any) => {
                        return (
                          <li key={drops.id}>
                            <a
                              href={drops.url}
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {drops.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex justify-end w-full">
                <button className="text-white hover:bg-red-500 p-4 flex ">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}
