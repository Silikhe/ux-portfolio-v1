import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Modal from "./Modal";
import { navigate } from "gatsby-link";

// import { Link as RouterLink, useLocation, useHistory } from 'react-router-dom';

export default function Project({ cases }) {
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
              <a class="flex justify-center project" key={study.id}>
                {/* {{id1: study.id}} */}
                <div class="block rounded-sm shadow-md bg-white max-w-lg item-center text hover:bg-gray-0 dark:hover:bg-gray-700 cursor-pointer">
                  <div class="flex justify-between px-4 pt-4 bg-ray-100 relative">
                    <Link
                      to={!study.private ? `/case-study/${study.slug}` : ""}
                      onClick={() => {
                        if (study.private) {
                          handleModalOpen();
                        }
                      }}
                    >
                      <h5 className="py-3 px-3 uppercase text-xl font-semibold text-gray-700 dark:text-white">
                        {study.title}
                      </h5>
                    </Link>

                    <button
                      id={study.slug}
                      data-dropdown-toggle="dropdownHover"
                      data-dropdown-trigger="hover"
                      className="inline-block drop-btn outline-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                      type="button"
                      onClick={getDropdownIds(event, study.slug)}
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
                      id={study.id}
                      className={`z-10 w-44 dropdown dropdow bg-white rounded divide-y divide-gray-100 shadow right-14 absolute ${
                        isOpen ? "block" : "hidden"
                      }`}
                    >
                      <ul class="py-2" aria-labelledby={study.id}>
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
                  <Link
                    to={!study.private ? `/case-study/${study.slug}` : ""}
                    onClick={() => {
                      if (study.private) {
                        handleModalOpen();
                      }
                    }}
                  >
                    {" "}
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
                      <p class="text-gray-500 text-base mb-4">
                        {study.project_intro}
                      </p>
                      <div>
                        <span class="inline-block   text-sm  text-gray-800 mr-2 mb-1">
                          <span className="">CONTEXT: </span>{" "}
                          <span className="uppercase">{study.context}</span>
                        </span>
                      </div>
                    </div>
                    <div class="flex justify-between items-center  py-3 px-6 border-t border-gray-300 text-gray-600">
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
                          <p className="text-sm pr-2 my-1">View Case Study</p>
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
                  </Link>
                </div>
                <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                  <h1 className="text-lg font-medium mb-4">
                    Enter PIN to Access Case Study
                  </h1>
                  <form
                    onSubmit={(event) => {
                      handleSubmit(event, study.pin, study.slug);
                    }}
                  >
                    <div class="mb-6">
                      <div class="mb-6">
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          onChange={handleInputChange}
                          id="password"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="•••••••••"
                          required
                        />
                        {/* {study.pin != userInput ? <p>
          <p class="mt-2 none text-sm text-red-600 dark:text-red-500">
          <span class="font-medium">Oh, snapp!</span> Some error
          message.
        </p>
        </p> : <p>nikskskkn</p>} */}

                        {study.pin !== userInput && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            <span className="font-medium">Oh, snap!</span> The
                            password is incorrect.
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </Modal>
              </a>
            );
          })}

          {cases.map((study) => {
            return (
              <div>
                <div class="flex justify-center over">
                  <div class="rounded-2 shadow-md bg-white project-progress hover:bg-gray-100 dark:hover:bg-gray-700 max-w-lg item-center overflow-hidden project">
                    <div class="project-img relative">
                      <div class="tag absolute top-2 right-2">
                        <span class="inline-block bg-gray-100 rounded-2 px-3 py-1 text-sm text-gray-500 mr-2 mb-1">
                          <span>Ongoing</span>
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
                        On progress design
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
                        Comming Soon!Stay tuned. come check next time
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

          {/* <div class="flex justify-center over">
            <div class="rounded-2 shadow-md bg-white project-progress hover:bg-gray-100 dark:hover:bg-gray-700 max-w-lg item-center overflow-hidden project">
              <div class="project-img relative">
                <div class="tag absolute top-2 right-2">
                  <span class="inline-block bg-gray-100 rounded-2 px-3 py-1 text-sm text-gray-500 mr-2 mb-1">
                    <span>Ongoing</span>
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
                  On progress design
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
                  Comming Soon!Stay tuned. come check next time
                </p>
              </div>
              <div class=" justify-between pb-5 py-3 px-6 border-t border-gray-300 text-gray-600">
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

                {/* {!study.in_progress ? (
                      
                    ) : (
                      <button onClick={() => handleModalOpen()}>
                        Open Modal
                      </button>
                    )} */}
          {/* </div>
            </div>
          </div> */}

          <div class="w-full max-w-lg bg-white border rounded-2 shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between px-4 pt-4 bg-ray-100">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
                disab
              >
                <span class="sr-only">Open dropdown</span>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul class="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                className="w-28 h-30 mb-3 mt-5 rounded-full shadow-sm"
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
                {/* <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Download Resume
                </a> */}
                <div class="flex  justify-between  ">
                  <div
                    className="flex kk bg-gray-100 rounded-2 px-3 py-2"
                    style={{
                      color: `${mainColor}`,
                      backgroundColor: `${opacity1}`,
                      opacity: "",
                      transition: "opacity 0.3s",
                    }}
                  >
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
                    <p className="text-sm pl-2">View Case Study</p>
                  </div>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-2 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class=" mb-5 PB-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View the Archive
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
