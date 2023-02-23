import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Modal from "./Modal";
import { navigate } from "gatsby-link";
export default function Case({ data }) {
  const { allStrapiCase: { nodes: cases } = { nodes: [] } } = data || {};

  console.log(cases);
  const [isOpen, setOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  console.log(cases);
  const mainColor = "rgb(225, 35, 36)";
  let opacity1 = "rgba(225, 35, 36, .1)";
  const url = window.location.href;

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const ref = React.useRef(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // The DOM element is accessible here.
    console.log(ref.current);
  }, []);

  function getDropdownIds(e, par) {
    console.log(par);
    const dropdownElems = document.querySelector("dropdown");

    const dropdownIds = [];
    console.log(dropdownElems);
  }

  // getDropdownIds()
  const shareOnLinkedIn = () => {
    const postText =
      "Looking for some design inspiration? Check out @silikhesilas's fresh and bold portfolio! 🔥 Their case studies will take your UI/UX game to the next level. Share this secret weapon and let's take over the design world! 🚀 #designinspiration #uiux #portfoliogoals";
    const postUrl = "https://silikhe.com"; // replace with the URL of your post

    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      postUrl
    )}&title=${encodeURIComponent(postText)}&summary=${encodeURIComponent(
      postText
    )}&source=LinkedIn&thumbnailUrl=${imageUrl}`;

    window.open(linkedInUrl);
  };

  const imageUrl =
    "https://cdn.dribbble.com/userupload/4173060/file/original-c4631c707d399a30ca45327f09e036e5.png?compress=1&resize=1024x768";

  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const fileSizeInMB = blob.size / (1024 * 1024);

      if (fileSizeInMB > 5) {
        console.log("Image file is too large");
      } else {
        console.log("Image file is within size limit");
      }
    });

  const shareOnTwitter = () => {
    const tweetText =
      "Feeling stuck in a design rut? Check out @silikhesilas's fresh and bold portfolio! 🔥 Their case studies will take your UI/UX game to the next level. Share this secret weapon and let's take over the design world! 🚀 #designinspiration #uiux #portfoliogoals";
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(
      tweetText
    )}&amp;via=yourTwitterHandle&amp;hashtags=example,hashtag&amp;media=${imageUrl}`;

    window.open(tweetUrl);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (e, pin, slag) => {
    e.preventDefault();
    setIsModalOpen(false);
    if (userInput == pin) {
      // alert("lol");
      navigate(`/case-study/${slag}`);
      // Launch the private project
    } else {
      alert("lol");
      // Show an error message
    }
  };

  const privateCases = cases.filter((cc) => cc.private);
  return (
    <div className="">
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
        <script
          async
          defer
          src="//platform.linkedin.com/in.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <div class="bg-white text-center pt-9">
        <div class="font-bold text-xl mb-2 text-gray-800">
          Featured UX Adventures:{" "}
          <span className="text-gray-500">Tales of Delightful Design</span>
        </div>
        <div class="text-left bg-white p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {cases.map((study) => {
            return (
              <div>
                <div class="flex justify-center over">
                  <div class="rounded-2 shadow-md bg-white project-progress hover:bg-gray-100 dark:hover:bg-gray-700 max-w-lg item-center overflow-hidden project">
                    <div class="project-img relative">
                      <div class="tag absolute top-2 right-2">
                        <span class="inline-block bg-gray-100 rounded-2 px-3 py-1 text-sm text-gray-500 mr-2 mb-1">
                          <span>
                            {study.in_progress ? "progress" : study.title}
                          </span>
                        </span>
                      </div>
                      <img
                        class="w-full"
                        src="https://static.wixstatic.com/media/72c0b2_02e6d0d2d2c8439a9e8793ad4d212832~mv2.png/v1/fill/w_586,h_391,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/72c0b2_02e6d0d2d2c8439a9e8793ad4d212832~mv2.png"
                        alt="project-name"
                      />
                    </div>
                    <div class="flex justify-between px-4 pt-4 bg-ray-100">
                      <h5 class="py-3 px-3 text-xl font-bold text-gray-700 dark:text-white">
                        {study.title}
                      </h5>

                      <button
                        id="dropdownButton"
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-trigger="hover"
                        className="inline-block drop-btn outline-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button"
                        onClick={handleDropDown}
                      >
                        <span class="sr-only">Open dropdown</span>
                        <svg
                          class="w-6 h-6"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>
                      </button>

                      <div
                        // id="dropdown"
                        className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow right-14 absolute ${
                          isOpen ? "block" : "hidden"
                        }`}
                      >
                        <ul class="py-2" aria-labelledby="dropdownButton">
                          <li>
                            <a
                              onClick={shareOnTwitter}
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Share on Twitter
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              onClick={shareOnLinkedIn}
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white "
                            >
                              Share on LinkedIn
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={handleDropDown}
                              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Close
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div class="px-6 pt-4 pb-0">
                        <span class="inline-block bg-gray-100 rounded-2 px-3 py-1 text-sm  text-gray-500 mr-2 mb-1">
                          <span>UI Design</span>
                        </span>
                        <span class="inline-block bg-gray-100 rounded-2 px-3 py-1 text-sm  text-gray-500 mr-2 mb-1">
                          <span>UX Design</span>
                        </span>
                        <span class="inline-block bg-gray-100 rounded-2 px-3 py-1 text-sm  text-gray-500 mr-2 mb-1">
                          <span>UX Research</span>
                        </span>
                      </div>
                    </div>
                    <div class="p-6">
                      <p class="text-gray-500 text-base mb-2">
                        {study.project_intro}{" "}
                      </p>
                    </div>
                    <div class=" justify-between pb-5 py-3 px-6 border-t border-gray-300 text-gray-600">
                      {study.in_progress ? (
                        <div>
                          <div class="flex justify-between pro mb-1">
                            <span
                              class="gray-500 truncate dark:text-gray-400 dark:text-white"
                              // style={{ color: `${mainColor}` }}
                            >
                              Research
                            </span>
                            <span
                              class="gray-500 truncate dark:text-gray-400 dark:text-white"
                              // style={{ color: `${mainColor}` }}
                            >
                              80%
                            </span>
                          </div>
                          <div
                            class="w-full bg-gray-100 rounded-sm h-2.0 dark:bg-gray-700"
                            // style={{ backgroundColor: `${opacity1}` }}
                          >
                            <div
                              class="bg-gray-400 h-2.5 pro-1 rounded-sm"
                              style={{
                                width: `80%`,
                                // , backgroundColor: `${mainColor}`
                              }}
                            ></div>
                          </div>
                        </div>
                      ) : (
                        <div class="flex justify-between items-center   border-gray-300 text-gray-600">
                          <p className="">{study.duration}</p>
                          <div class="flex items-center  justify-between  ">
                            <div
                              className="flex child rounded-2 px-4 py-2"
                              style={{
                                opacity: "",
                                transition: "opacity 0.3s",
                                ":hover": {
                                  color: `${mainColor}`,
                                  backgroundColor: `${opacity1}`,
                                },
                              }}
                            >
                              <p className="text-sm pr-2 my-1">
                                View Case Study
                              </p>
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
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
        <button
          type="button"
          class=" mb-5 PB-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          BACK HOME
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
