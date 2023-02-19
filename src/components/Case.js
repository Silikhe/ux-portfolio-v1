import React from "react";
import { Link } from "gatsby";

export default function Case() {
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const mainColor = "#008000";
  let opacity1 = hexToRgba(mainColor, 0.1);
  let opacity5 = hexToRgba(mainColor, 0.5);

  return (
    <div
      className="bg-grey-200 dark:bg-gray-900 py-2 my-5 mx"
      style={{ background: `${opacity1}` }}
    >
      <div className="bg-white mx-10 my-7">
        <div
          className="m-7  rounded-sm flex items-center justify-center flex-col min-h- w-70  text-white py-8 md:py-20 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          style={{ backgroundColor: `${opacity5}` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay z-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')`,
              filter: "brightness(70%)",
            }}
          ></div>
          <h1 className="text-medium  text-gray-100 mt-5  tracking-tight leading-tight mb-1 md:mb-2">
            Passion Project
          </h1>
          <h5 class="py-5 px-3 text-2xl font-medium text-grey-100 dark:text-white">
            Essaytank website design{" "}
          </h5>
        </div>

        <div class="flex justify-between my-10 mx-7 ">
          <div class="flex items-center g-gray-100  mr-4">
            <p className="text-bold">
              Role: {""}
              <span className="text-gray-500">Product designer</span>{" "}
            </p>
          </div>
          <div class="flex items-center g-gray-100  mr-4">
            <p className="text-bold">
              Context: {""}
              <span className="text-gray-500">Edu Tech</span>{" "}
            </p>
          </div>
          <div class="flex items-center g-gray-100  mr-4">
            <p className="text-bold">
              Duration: {""}
              <span className="text-gray-500">Feb 2015 - Aug 2016</span>{" "}
            </p>
          </div>
        </div>

        <div class="mx-7 my-3 grid grid-cols-4 gap-4">
          <div class="col-span-3">
            <h5 className="font-bold text-xl mb-2 text-gray-800 sm:text-sm">
              Individual Contribution
            </h5>
            <p class="text-gray-500 text-base mb-4">
              I was hired as the only designer on the team, working under the
              product team, while also assisting in marketing design efforts. I
              reported directly to the VP of product and the CEO (who was a
              design advocate). Being a part of a team where leadership was
              built on the understanding that great design is important, allowed
              me to create my best work. I was originally hired to work on the
              marketing landing pages, banner ads and social media collateral,
              but quickly moved into a product design role.
            </p>
          </div>
          <div class="col-span-1">
            <div class=" justify-between pb-4 py-2 px-4 text-gray-600">
              <div class="flex justify-between mb-1">
                <span
                  class="gray-500 truncate dark:text-gray-400 dark:text-white"
                  style={{ color: `${mainColor}` }}
                >
                  Research
                </span>
                <span
                  class="gray-500 truncate dark:text-gray-400 dark:text-white"
                  style={{ color: `${mainColor}` }}
                >
                  80%
                </span>
              </div>
              <div
                class="w-full rounded-sm h-2.0 dark:bg-gray-700"
                style={{ backgroundColor: `${opacity1}` }}
              >
                <div
                  class="bg-blue-600 h-2.5 rounded-sm"
                  style={{ width: `80%`, backgroundColor: `${mainColor}` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="company mx-7 mb-5">
          <div className=" grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <h5
                className="mb-2 mb-5 text-uppercase"
                style={{ color: `${mainColor}` }}
              >
                Client Detail
              </h5>
              <h5 className="font-bold text-xl mb-2 text-gray-800 sm:text-sm">
                Understanding the company
              </h5>
              <div className="my-2">
                <h5 className="text-gray-800 mb-1 ">About</h5>
                <p class="text-gray-500 text-base mb-4">
                  I was hired as the only designer on the team, working under
                  the product team, while also assisting in marketing design
                  efforts. I reported directly to the VP of product and the CEO
                  (who was a design advocate). Being a part of a team where
                  leadership was built on the understanding that great design is
                  important, allowed me to create my best work. I was originally
                  hired to work on the marketing landing pages, banner ads and
                  social media collateral, but quickly moved into a product
                  design role.
                </p>
              </div>
              <div className="my-2">
                <h5 className="text-gray-800 mb-1 ">Challenges</h5>
                <p class="text-gray-500 text-base mb-4">
                  I was hired as the only designer on the team, working under
                  the product team, while also assisting in marketing design
                  efforts. I reported directly to the VP of product and the CEO
                  (who was a design advocate). Being a part of a team where
                  leadership was built on the understanding that great.
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div class="w-full text-left h-12 my-3 pb flex justify-start items-center border-b border-gray-300">
                  <img
                    class="h-full object-contain rounded-0 pb-1"
                    src="https://sokofresh.co.ke/wp-content/uploads/2022/12/SokoFresh-Logo-1-1.png"
                    alt="Moringa School logo"
                  />
                </div>

                <div className="my-3">
                  <p
                    className="text-sm text-bold text-gray-900 "
                    style={{ color: `${mainColor}` }}
                  >
                    iTuneStores
                  </p>
                  <a className="text-sm  text-gray-900  mb-1 underline">
                    Douwnload application
                  </a>
                </div>
                <div className="my-3">
                  <p
                    className="text-sm text-bold text-gray-900 "
                    style={{ color: `${mainColor}` }}
                  >
                    iTuneStores
                  </p>
                  <a className="text-sm  text-gray-900  mb-1 underline">
                    Douwnload application
                  </a>
                </div>
                <div className="my-3">
                  <p
                    className="text-sm text-bold text-gray-900 "
                    style={{ color: `${mainColor}` }}
                  >
                    iTuneStores
                  </p>
                  <a className="text-sm  text-gray-900  mb-1 underline">
                    Douwnload application
                  </a>
                </div>
              </div>
              <div class="hidden md:block my-5">
                <h5 className=" text-xl mb-2 text-black sm:text-sm">
                  Tools Used
                </h5>{" "}
                <div class="flex flex-row items-center flex-wrap">
                  <div class="mr-3 text-center flex-shrink-0">
                    <img
                      class="w-12 p-2 h-12 shadow-sm"
                      src="https://seeklogo.com/images/M/miro-logo-4F00416377-seeklogo.com.png"
                      alt="Silikhe image"
                      style={{
                        color: `${mainColor}`,
                        backgroundColor: `${opacity1}`,
                      }}
                    />
                    <h5
                      className="text-sm mb-1 underline"
                      style={{
                        color: `${mainColor}`,
                      }}
                    >
                      Miro
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between m-7 pb-8">
          <div class="flex text-center items-center g-gray-900  mr-4">
            <h1 className="text-bold">1</h1>
          </div>
          <div class="flex items-center g-gray-900  mr-4">
            <h1 className="text-bold">1</h1>
          </div>
          <div class="flex items-center g-gray-900  mr-4">
            <h1 className="text-bold">1</h1>
          </div>
        </div>
        <div className="text-center m-10  inset-0 bg-lightblue ">
          <h1 className="text-5xl font-bold p-10">Case Study</h1>
        </div>
      </div>
    </div>
  );
}
