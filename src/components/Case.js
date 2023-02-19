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
                <div class="flex flex-row items-center flex-wrap ">
                  <div class="mr-3 text-center flex-shrink-0 mb-1">
                    <img
                      class="w-12 p-2 h-12 mb-1 shadow-sm object-cover"
                      src="https://w7.pngwing.com/pngs/911/515/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail.png"
                      alt="Silikhe image"
                      style={{
                        color: `${mainColor}`,
                        backgroundColor: `${opacity1}`,
                      }}
                    />
                    <h5 className="text-sm mb-1 text-gray-600">Miro</h5>
                  </div>
                  <div class="mr-3 text-center flex-shrink-0 mb-1">
                    <img
                      class="w-12 p-2 h-12 mb-1 shadow-sm"
                      src="https://seeklogo.com/images/M/miro-logo-4F00416377-seeklogo.com.png"
                      alt="Silikhe image"
                      style={{
                        color: `${mainColor}`,
                        backgroundColor: `${opacity1}`,
                      }}
                    />
                    <h5 className="text-sm mb-1 text-gray-600">Miro</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-around m-7 my-7  pb-8  border-b border-gray-300">
          <div class="flex text-center items-center   mr-4">
            <div className="justify-center text-center w-full items-center">
              <h1 className="text-bold text-gray-800 text-5xl">1</h1>
              <h5 className="text-nomarl mb-1 text-gray-600">
                Product Manager
              </h5>
            </div>
          </div>
          <div class="flex text-center items-center   mr-4">
            <div className="justify-center items-center">
              <h1 className="text-bold text-gray-800 text-5xl">1</h1>
              <h5 className="text-sm mb-1 text-gray-600">Product Designer</h5>
            </div>
          </div>
          <div class="flex text-center items-center   mr-4">
            <div className="justify-center items-center">
              <h1 className="text-bold text-gray-800 text-5xl">4</h1>
              <h5 className="text-sm mb-1 text-gray-600">Software Developer</h5>
            </div>
          </div>
        </div>
        <div className="text-center m-7 pb-8  ">
          <h1 className="text-5xl font-bold p-10">Case Study</h1>
        </div>
      </div>
      <div className="text-center mx-9 mb-2  bg-white">
        <div class="font-bold text-xl py-10 text-gray-800">
          Let's optimize UX together -{" "}
          <span className="text-gray-500">Share your insights!</span>
        </div>

        <div class="text-left bg-white p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <form>
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                <div>
                  <label
                    for="email-address-icon"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="email-address-icon"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="silikhe@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <label for="editor" class="sr-only">
                  Publish post
                </label>
                <textarea
                  id="editor"
                  rows="8"
                  class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write an article..."
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Publish post
            </button>
          </form>
          {/* <div class=" bg-white  rounded-2 shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-4">
              <img
                className="w-28 h-28 mb-2 rounded-full "
                src="https://media.licdn.com/dms/image/D4D03AQFxdM83Sul07Q/profile-displayphoto-shrink_800_800/0/1672765184843?e=1681948800&v=beta&t=syB6qoUj4zmmno-JfoMjB3EwPRO1LLTG9iIZ0_qz1WM"
                alt="Silikhe image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Silas Silikhe
              </h5>

              <span class="text-sm mb-2 text-gray-500 dark:text-gray-400">
                Product Designer / Frontend Dev
              </span>
              <a
                href="https:/www.silikhe.com"
                class="text-sm mb-5 text-gray-500 dark:text-gray-400"
              >
                www.silikhe.com
              </a>
              <div class="flex  space-x-6 sm:justify-center sm:mt-0">
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Instagram page</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span class="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">GitHub account</span>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Dribbbel account</span>
                </a>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Download Resume
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-2 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div> */}

          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              Let's connect and optimize our UX/UI synergy!
            </h5>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
              Connect with me, the UX/UI design Jedi - may the design be with
              you!
            </p>
            <ul class="my-4 space-y-3">
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
                  <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Popular
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    class="h-5"
                    viewBox="0 0 292 292"
                    fill="none"
                  >
                    <path
                      d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z"
                      fill="#3259A5"
                    />
                    <path
                      d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z"
                      fill="white"
                    />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    Coinbase Wallet
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    svg
                    class="h-5"
                    viewBox="0 0 75.591 75.591"
                  >
                    <linearGradient
                      id="a"
                      gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stop-color="#ff1b2d" />
                      <stop offset=".3" stop-color="#ff1b2d" />
                      <stop offset=".614" stop-color="#ff1b2d" />
                      <stop offset="1" stop-color="#a70014" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stop-color="#9c0000" />
                      <stop offset=".7" stop-color="#ff4b4b" />
                      <stop offset="1" stop-color="#ff4b4b" />
                    </linearGradient>
                    <g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
                      <path
                        d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                        fill="url(#a)"
                      />
                      <path
                        d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                        fill="url(#b)"
                      />
                    </g>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    Opera Wallet
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    class="h-5"
                    viewBox="0 0 512 512"
                    version="1.1"
                  >
                    <defs>
                      <radialGradient
                        cx="0%"
                        cy="50%"
                        fx="0%"
                        fy="50%"
                        r="100%"
                        id="radialGradient-1"
                      >
                        <stop stop-color="#5D9DF6" offset="0%"></stop>
                        <stop stop-color="#006FFF" offset="100%"></stop>
                      </radialGradient>
                    </defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g id="logo">
                        <rect
                          id="base"
                          fill="url(#radialGradient-1)"
                          x="0"
                          y="0"
                          width="512"
                          height="512"
                          rx="256"
                        ></rect>
                        <path
                          d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z"
                          id="WalletConnect"
                          fill="#FFFFFF"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    WalletConnect
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    class="h-4"
                    viewBox="0 0 96 96"
                    fill="none"
                  >
                    <path
                      d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z"
                      fill="#617BFF"
                    />
                    <path
                      d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z"
                      fill="#617BFF"
                    />
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
                </a>
              </li>
            </ul>
            <div>
              <a
                href="#"
                class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
              >
                <svg
                  class="w-3 h-3 mr-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="question-circle"
                  role="img"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                  ></path>
                </svg>
                Why do I need to connect with my wallet?
              </a>
            </div>
          </div>

          <div class="flex justify-center">
            <div class="block rounded-2 shadow-md bg-white max-w-lg item-center text ">
              {/* <div class="py-3 px-6 border-b border-gray-300">Featured</div> */}
              <div class="flex justify-between px-4 pt-4 bg-ray-100">
                <h5 className="font-bold text-2xl mb-2 text-gray-800 sm:text-sm">
                  Understanding the company okayy
                </h5>
              </div>

              <div>
                <div
                  class="flex px-5 py-2 pt-1 pb-2"
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <span
                    class="inline-flex items-center justify-center px-2 py-0 mr-2 text-xs font-medium text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
                    style={{
                      backgroundColor: `${opacity1}`,
                      opacity: "",
                      transition: "opacity 0.3s",
                    }}
                  >
                    UX Design
                  </span>
                  <span
                    class="inline-flex items-center justify-center px-2 py-0 mr-2 text-xs font-medium text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
                    style={{
                      backgroundColor: `${opacity1}`,
                      opacity: "",
                      transition: "opacity 0.3s",
                    }}
                  >
                    UX Design
                  </span>
                  <span
                    class="inline-flex items-center justify-center px-2 py-0 mr-2 text-xs font-medium text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
                    style={{
                      backgroundColor: `${opacity1}`,
                      opacity: "",
                      transition: "opacity 0.3s",
                    }}
                  >
                    UX Design
                  </span>
                </div>
              </div>
              <div class="px-5">
                <p class="text-gray-500 text-sm mb-4 truncate- p-case">
                  As the lead UX designer for EssayTank at Wiggle Technology, I
                  created a fun and user-friendly platform that streamlined
                  academic writing with interactive prompts, easy adoption and
                  retention, and key features like plagiarism detection and live
                  feedback.{" "}
                </p>
              </div>
              <div class="flex  justify-between py-3 px-6 border-t border-gray-300 text-gray-600">
                <div
                  className="flex kk bg-gray-100 rounded-2 px-3 py-1"
                  style={{
                    color: `${mainColor}`,
                    backgroundColor: `${opacity1}`,
                    opacity: "",
                    transition: "opacity 0.3s",
                  }}
                >
                  <p className="text-sm pr-2">Next Case Study</p>
                  <svg
                    class="w-4 h-4 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(45)"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
