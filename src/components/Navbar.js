import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

export default function Navbar() {
  const [isCopied, setIsCopied] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  function handleClick() {
    navigator.clipboard.writeText("silikhesilas@gmail.com");
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 1000);
  }

  return (
    <div>
      <nav
        className={`px-2 relative shadow sm:px-4 py-2.5 dark:bg-gray-900 flex-shrink-1 fixed w-full sm:w z-20 top-0 left-0 border-b border-gray-100 dark:border-gray-600 transition-transform duration-200 transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ flexWrap: "wrap" }}
      >
        <div className="flex-shrink-0 container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/">
            <a className="flex items-center ">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white logo">
                Silikhe_
              </span>
            </a>
          </Link>
          <div className="flex md:order-2">
            <span
              className="text-sm font-medium mr-3 px-3.5 py-1.5 rounded-sm dark:bg-gray-700 dark:text-purple-400 outline-none hidden sm:block"
              style={{
                backgroundColor: `rgba(225, 35, 36, 0.1)`,
                color: `rgba(225, 35, 36, .8)`,
                border: `.5px solid rgba(225, 35, 36, 1)`,
              }}
              // onClick={handleClick}
            >
              silikhesilas@gmail.com
            </span>

            {isAlertVisible && (
              <div
                className="flex p-2 mb-4 text-sm text-green-800 border border-green-300 rounded-sm bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 absolute right-10 top-20"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Email Copied to clipboard!</span>
                </div>
              </div>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="nav-btn inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden sm:block hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              style={{ flexWrap: "wrap" }}
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
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-sm  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <Link to="/">
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    style={{ color: `rgba(225, 35, 36, 1)` }}
                    aria-current="page"
                  >
                    HOME
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/about/">
                  <a class="block py-2 pl-3 pr-4 text-gray-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors">
                    ABOUT
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/cases/">
                  <a class="block py-2 pl-3 pr-4 text-gray-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors">
                    CASE STUDY
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
}
