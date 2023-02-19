import React, { useState } from "react";

export default function Hero() {
  return (
    <div>
      <div className="sec text-center flex flex-col justify-center items-center">
        <h1 className="mb-4 font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Pixel Perfect, User-Centric Design Maverick!{" "}
        </h1>
        <p className="mb-4 text-sm font-normal text-gray-500 lg:text-lg sm:px-14 xl:px-44 dark:text-gray-400 pt-4 pb-4 sm: p-5">
          Breaking boundaries and pushing the limits of what's possible in the
          world of UI/UX design is my ultimate passion! Let's ditch the boring
          status quo and co-create intuitive, user-centric interfaces that spark
          joy, drive engagement and inspire action. Whether it's in Nairobi or
          beyond, I'm ready to challenge the norm and craft experiences that
          truly stand out.
        </p>
        <div className="flex justify-center items-center ">
          <div className=" flex justify-center items-center w-full ">
            <div className="per-img pr-3">
              <img
                className="w-16 h-16 p-1 rounded-2 ring-1 ring-gray-200 dark:ring-gray-400"
                src="https://media.licdn.com/dms/image/D4D03AQFxdM83Sul07Q/profile-displayphoto-shrink_800_800/0/1672765184843?e=1681948800&v=beta&t=syB6qoUj4zmmno-JfoMjB3EwPRO1LLTG9iIZ0_qz1WM"
                alt="Bordered avatar"
              />
            </div>
            <div className="text-left res-btn pr-4">
              <div className="text-left res-btn">
                <p
                  className="text-gray-900 text-normal dark:text-gray-400"
                  style={{ fontSize: "12px" }}
                >
                  SILAS SILIKHE
                </p>
                <p
                  className="text-gray-500 text-sm pt- pb-1 dark:text-gray-400"
                  style={{ fontSize: "12px" }}
                >
                  Product Designer
                </p>
              </div>
              <a href="https://example.com/my-resume.pdf" download>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 26 26"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>

                  {/* <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg> */}

                  <p
                    className="ml-1 font-medium text-gray-900"
                    style={{ fontSize: "13px" }}
                  >
                    Resume
                  </p>
                </div>
              </a>
            </div>

            <div style={{ width: "45%" }}>
              <p className="text-gray-500 text-sm italic dark:text-gray-400 border-l-2 border-gray-400 pl-4 py-2 hidden sm:block">
                "Good UX is like a good joke - if you have to explain it, it's
                not really that good!"
                {/* "The best UX designs are invisible - they
                make users forget they're using technology and just enjoy the
                experience." */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
