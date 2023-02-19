import React from "react";
import { Link } from "gatsby";

export default function Case() {
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const mainColor = "#e12324";
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
                <h5 className=" text-xl mb-2 text-semibold sm:text-sm">
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
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-sm shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h6 class="mb-3 text-1xl text-base font-semibold text-gray-800 md:text- dark:text-white">
              Any thoughts on Case Study!
            </h6>
            
            <div>
              <form>
                <div className="mb-2">
                  <label
                    for="email-address-icon"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-sm font-normal text-gray-500 dark:text-gray-400"
                  >
                    Your Email
                  </label>
                  <div class="relative cursor-pointer">
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
                      class=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="silikhesilas@gmail.com"
                    />
                  </div>
                </div>
                <div class="w-full mb-4 border border-gray-200 rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <p className="text-sm">Type your Feedback</p>
                  </div>
                  <div class="px-4 py-2 bg-white rounded-sm dark:bg-gray-800">
                    <label for="editor" class="sr-only">
                      Publish post
                    </label>
                    <textarea
                      id="editor"
                      rows="4"
                      className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write an message..."
                      required
                    ></textarea>
                  </div>
                </div>
                <div
                  className="flex justify-center bg-gray-100 rounded-2 cursor-pointer px-3 py-3"
                  style={{
                    color: `${mainColor}`,
                    backgroundColor: `${opacity1}`,
                    opacity: "",
                    transition: "opacity 0.3s",
                  }}
                >
                  <p className="text-sm pr-2">Leave Comment</p>
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
              </form>
            </div>
          </div>

          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-sm shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 align-items-center">
            <div class="kk">
              <h6 class="mb-3 text-1xl text-base font-semibold text-gray-800 md:text- dark:text-white">
                Let's connect and optimize our UX/UI synergy!
              </h6>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Connect with me, the UX/UI design Jedi - may the design be with
                you!
              </p>
              <ul class="my-4 space-y-3">
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base text-gray-900 bg-gray-50 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>

                    <span class="flex-1 ml-3 text-sm ">LinkedIn</span>
                    <span
                      class="inline-flex items-center justify-center px-2 py-0 mr-2 text-xs font-medium text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
                      style={{
                        backgroundColor: `${opacity1}`,
                        opacity: "",
                        transition: "opacity 0.3s",
                      }}
                    >
                      Recomended
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base text-gray-900 bg-gray-50 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                    </svg>
                    <span class="flex-1 ml-3 text-sm ">Behance</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base text-gray-900 bg-gray-50 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>

                    <span class="flex-1 ml-3 text-sm ">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base text-gray-900 bg-gray-50 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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

                    <span class="flex-1 ml-3 text-sm ">GitHub</span>
                  </a>
                </li>
              </ul>
              <div>
                <a
                  href="https://example.com/my-resume.pdf"
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
                  Can I get your resume?
                </a>
              </div>
            </div>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-sm shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 align-items-center">
            <div class="kk">
              <h6 class="mb-3 text-1xl text-base font-semibold text-gray-800 md:text- dark:text-white">
                Let's connect and optimize our UX/UI synergy!
              </h6>
              <div>
                <div class=" pt-4 pb-0">
                  <span
                    class="inline-block bg-gray-100 rounded-2 px-3 py-1 text-sm  text-gray-500 mr-2 mb-1"
                    style={{
                      backgroundColor: `${opacity1}`,
                      opacity: "",
                      transition: "opacity 0.3s",
                    }}
                  >
                    <span>UI Design</span>
                  </span>
                  <span
                    class="inline-block bg-gray-100 rounded-2 px-3 py-1 text-sm  text-gray-500 mr-2 mb-1"
                    style={{
                      backgroundColor: `${opacity1}`,
                      opacity: "",
                      transition: "opacity 0.3s",
                    }}
                  >
                    <span>UX Design</span>
                  </span>
                  <span
                    class="inline-block bg-gray-100 rounded-2 px-3 py-1 text-sm  text-gray-500 mr-2 mb-1"
                    style={{
                      backgroundColor: `${opacity1}`,
                      opacity: "",
                      transition: "opacity 0.3s",
                    }}
                  >
                    <span>UX Research</span>
                  </span>
                </div>
              </div>
              
              <div class="py-3">
                <p class="text-gray-500 text-sm pb-4  p-case border-b border-gray-300 text-gray-600">
                  As the lead UX designer for EssayTank at Wiggle Technology, I
                  created a fun and user-friendly platform that streamlined
                  academic writing with interactive prompts, easy adoption and
                  retention, and key features like plagiarism detection and live
                  feedback.{" "}
                </p>
              </div>
  
              <div
                  className="flex justify-center bg-gray-100 rounded-sm cursor-pointer px-3 py-3"
                  style={{
                    color: `${mainColor}`,
                    backgroundColor: `${opacity1}`,
                    opacity: "",
                    transition: "opacity 0.3s",
                  }}
                >
                  <p className="text-sm pr-2">Leave Comment</p>
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
  );
}
