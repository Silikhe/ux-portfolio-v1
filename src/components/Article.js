import React from "react";

export default function Article() {
  return (
    <div className="w-full py-8 ">
      <div className="text-center">
        <div class="font-bold text-xl text-cente mb-2 text-gray-800">
          UX Gems:{" "}
          <span className="text-gray-500 text-center">
            My Top Featured Events
          </span>
        </div>
      </div>
      <div className="my-5 mx-20 article grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 bg-gray-100 lg:grid-cols-4 xl:grid-cols-4 gap-0">
        <div class="max-w-sm">
          <div>
            <ul className="mx-5 divide-y  border-b border-gray-300">
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  {/* <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1489569110040141826/ZzZgytR8_400x400.png"
                    alt="Neil image"
                  />
                </div> */}
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Moringa School
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      www.moringaschool.com
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {/* Virtual */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="p-5 article-content ">
            {/* <div>
            <span class="inline-block text-sm text-gray-800 mr-2 mb-1">
              <span class="">CONTEXT: </span>
              <span class="">EDU TECH</span>
            </span>
          </div> */}
            <a href="#">
              <h6 class="py-3 px- text-lg font-bold text-gray-700 dark:text-white">
                Intro to Product Design
              </h6>
            </a>

            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Unlock your creativity and gain a foundation in product design
              with our introductory course. Perfect for beginners!
            </p>
            <div class="flex justify-between pt-3 border-t border-gray-300 text-gray-600">
              <p class="text-sm text-grey-400">18.08.2023</p>
              <div class="flex">
                <span class="mr-2">View Event</span>
                <svg
                  class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
          <div class="article-img">
            <a href="#">
              <img
                class="rounded-t-"
                src="https://pbs.twimg.com/media/FnzZOvjXEAIIwVd?format=jpg&name=medium"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="max-w-sm">
          <div>
            <ul className="mx-5 divide-y divide-gray-200 dark:divide-gray-700u">
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  {/* <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1489569110040141826/ZzZgytR8_400x400.png"
                    alt="Neil image"
                  />
                </div> */}
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Friends of Figma Nairobi
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      www.friends.figma.com/nairobi
                    </p>
                  </div>
                  {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  Free
                </div> */}
                </div>
              </li>
            </ul>
          </div>
          <div class="article-img">
            <a href="#">
              <img
                class="rounded-t-"
                src="https://pbs.twimg.com/media/FmvJ23VWQAQmuCd?format=jpg&name=medium"
                alt=""
              />
            </a>
          </div>
          <div class="p-5 article-content ">
            {/* <div>
            <span class="inline-block text-sm text-gray-800 mr-2 mb-1">
              <span class="">CONTEXT: </span>
              <span class="">EDU TECH</span>
            </span>
          </div> */}
            <a href="#">
              <h6 class="py-3 px- text-lg font-bold text-gray-700 dark:text-white">
                Prototyping for User Focused Design
              </h6>
            </a>

            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Boost your UX game with Figma! Learn rapid prototyping for
              interactive interfaces and gain a competitive edge in product
              design.
            </p>
            <div class="flex justify-between pt-3 border-t border-gray-300 text-gray-600">
              <p class="text-sm text-grey-400">18.08.2023</p>
              <div class="flex">
                <span class="mr-2">View Event</span>
                <svg
                  class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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

        <div class="max-w-sm">
          <div>
            <ul className="mx-5 divide-y  border-b border-gray-300">
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  {/* <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1489569110040141826/ZzZgytR8_400x400.png"
                    alt="Neil image"
                  />
                </div> */}
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Koding and Kahawa
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      @KodingKahawa
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {/* Virtual */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="p-5 article-content ">
            {/* <div>
            <span class="inline-block text-sm text-gray-800 mr-2 mb-1">
              <span class="">CONTEXT: </span>
              <span class="">EDU TECH</span>
            </span>
          </div> */}
            <a href="#">
              <h6 class="py-3 px- text-lg font-bold text-gray-700 dark:text-white">
                Getting Started With Figma
              </h6>
            </a>

            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Unlock the power of UX design with Figma: A beginner's guide to
              building beautiful and intuitive interfaces.
            </p>
            <div class="flex justify-between pt-3 border-t border-gray-300 text-gray-600">
              <p class="text-sm text-grey-400">03.11.2023</p>
              <a
                href="https://drive.google.com/file/d/1scxbWDSHDJLlDFYHyjTZ-t6njZmOGWUH/view"
                class="flex"
              >
                <span class="mr-2">View Event</span>
                <svg
                  class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(45)"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="article-img">
            <a href="#">
              <img
                class="rounded-t-"
                src="https://pbs.twimg.com/media/Ff-LQtuXEAAOgsR?format=jpg&name=900x900"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="max-w-sm">
          <div>
            <ul className="mx-5 divide-y divide-gray-200 dark:divide-gray-700u">
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  {/* <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1489569110040141826/ZzZgytR8_400x400.png"
                    alt="Neil image"
                  />
                </div> */}
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Koding Kahawa
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      @KodingKahawa
                    </p>
                  </div>
                  {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  Free
                </div> */}
                </div>
              </li>
            </ul>
          </div>
          <div class="article-img">
            <a href="#">
              <img
                class="rounded-t-"
                src="https://pbs.twimg.com/media/FdPcREZX0AEpMkt?format=jpg&name=large"
                alt=""
              />
            </a>
          </div>
          <div class="p-5 article-content ">
            {/* <div>
            <span class="inline-block text-sm text-gray-800 mr-2 mb-1">
              <span class="">CONTEXT: </span>
              <span class="">EDU TECH</span>
            </span>
          </div> */}
            <a href="#">
              <h6 class="py-3 px- text-lg font-bold text-gray-700 dark:text-white">
                Getting Started as a UX Designer
              </h6>
            </a>

            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Level up your UX design skills with Figma! Learn the basics of
              prototyping, collaborating, and creating user-centered interfaces
              in this interactive workshop.
            </p>
            <div class="flex justify-between pt-3 border-t border-gray-300 text-gray-600">
              <p class="text-sm text-grey-400">18.08.2023</p>
              <div class="flex">
                <span class="mr-2">View Event</span>
                <svg
                  class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
