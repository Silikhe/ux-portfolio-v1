import React from "react";
import Case from "../components/Case";
import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout>
     <div className="about">
     <div
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded- md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full  h-96 md:h-auto md:w-48 "
          src="https://flowbite.com/docs/images/blog/image-4.jpg"
          alt=""
        />
        <img
          class="object-cover w-full  h-96 md:h-auto md:w-48 "
          src="https://flowbite.com/docs/images/blog/image-4.jpg"
          alt=""
        />
        <img
          class="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://flowbite.com/docs/images/blog/image-4.jpg"
          alt=""
        />
        <img
          class="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://flowbite.com/docs/images/blog/image-4.jpg"
          alt=""
        />
      </div>
     </div>
    </Layout>
  );
}
