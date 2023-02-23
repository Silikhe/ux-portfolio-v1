import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import { FiDownload } from "react-icons/fi"

const Medium = () => (
  <StaticQuery
    query={graphql`
      {
        allMediumPost {
          edges {
            node {
              title
              type
              createdAt(fromNow: false)
              mediumUrl
              content {
                subtitle
                postDisplay {
                  coverless
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div class="bg-white text-center pt-9">
        <div class="font-bold text-xl mb-2 text-gray-800">
        Fresh Picks:{" "}
          <span className="text-gray-500">Newest UX Adventures to Ignite Your Imagination</span>
        </div>
        <div class="text-left bg-white p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {data.allMediumPost.edges.map(({ node }, index) => (
            <div class="max-w-lg p-6 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                {/* <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {node.title}
                            </h5> */}
                <h5 class="py-3 text-xl font-bold text-gray-700 dark:text-white">
                  {node.title}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {node.content.subtitle}
              </p>
              <a
                target="_blank"
                href="https://medium.com/@silikhesilas"
                class="flex justify-between border-t pt-3 items-center text-blue-600 hover:underline"
              >
                Read Article
                <svg
                  class="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    )}
  />
);

export default Medium;
