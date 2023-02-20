import React, { useEffect } from "react";
import Case from "../components/Case";
import Layout from "../components/Layout";

const Panel = ({ background, children }) => (
  <div
    className="panel flex items-center justify-center text-white text-center transition-all font-serif"
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="flex flex-col">{children}</div>
  </div>
);

export default function About() {
  useEffect(() => {
    const panels = Array.from(
      typeof window !== "undefined" &&
        window.document.querySelectorAll(".panel")
    );

    function toggleOpen() {
      this.classList.toggle("open");
    }

    function toggleActive(e) {
      if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
      }
    }

    panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
    panels.forEach((panel) =>
      panel.addEventListener("transitionend", toggleActive)
    );

    return () => {
      panels.forEach((panel) => panel.removeEventListener("click", toggleOpen));
      panels.forEach((panel) =>
        panel.removeEventListener("transitionend", toggleActive)
      );
    };
  }, []);

  const mainColor = "rgb(225, 35, 36)";
  let opacity1 = "rgba(225, 35, 36, .1)";

  return (
    <Layout>
      <div className="mx-10">
        <div class=" text-center pt-9">
          <div class="font-bold text-xl mb-2 text-gray-800">
            Featured UX Adventures:{" "}
            <span className="text-gray-500">Tales of Delightful Design</span>
          </div>
          <div>
            <p className="my-5  text-gray-700 lg:text-lg sm:px-14 xl:px-44 dark:text-gray-400 pt-4 pb-4 sm: p-5">
              Empowering users through design - I am a Product Designer based in
              Nairobi, Kenya with a passion for creating intuitive and
              user-centered experiences. Driven by a desire to challenge the
              status quo and work with inspiring, creative teams.
            </p>
          </div>
          <div
            className="about my-5 block w-ful p-5  border border-white rounded  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
          >
            <div class="panels">
              <div class="panel panel1">
                <p className="">Sketch</p>
                <p>Jobs</p>
                <p>First</p>
              </div>
              <div class="panel panel3">
                <p>Iterate</p>
                <p>To</p>
                <p>Improve</p>
              </div>
              <div class="panel panel4">
                <p>Empathize</p>
                <p>Be</p>
                <p>Human</p>
              </div>
              <div class="panel panel5">
                <p>Validate</p>
                <p>Done</p>
                <p>Right</p>
              </div>
            </div>
          </div>
          <div
            className=" border-white mb-5 rounded p-5 "
            style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
          >
            <div className="bg-white   pb-5 px-10">
              <div className="border-b  mb-5">
                <h5 class="py-5  text-xl font-bold text-gray-700   dark:text-white">
                  Designing for bottom-line results{" "}
                </h5>
              </div>

              <div class="text-left border-b grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 py-3">
                <div className="p-1">
                  <p className="pb-1 ">
                    01/{" "}
                    <span className="text-gray-800">Strategy & Research</span>
                  </p>
                  <p
                    class="text-gray-500 text-sm   p-case  border-gray-300 text-gray-600"
                    style={{ lineHeight: "2" }}
                  >
                    Designing for impact, not just aesthetics. My process starts
                    with in-depth research and strategy development to fully
                    grasp my clients' unique needs and business goals. By
                    aligning our design plan with their vision, we build trust
                    and ensure long-term success. I deliver user-centered
                    solutions that drive real results and make a difference for
                    clients and their users alike.
                  </p>
                </div>
                <div className="p-1">
                  <p className="pb-1 ">
                    02/{" "}
                    <span className="text-gray-800">
                      UX Design & Interaction Design
                    </span>
                  </p>
                  <p
                    class="text-gray-500 text-sm   p-case  border-gray-300 text-gray-600"
                    style={{ lineHeight: "2" }}
                  >
                    Designing for the user, not for myself. I use design
                    thinking and data-driven approach to architect user
                    experiences that truly meet their needs. Iteration is key in
                    my process as I continually refine and improve the design to
                    achieve the best possible solution. My focus is on creating
                    a system that is not only visually appealing but also
                    efficient and user-centered.
                  </p>
                </div>
                <div className="p-1">
                  <p className="pb-1 ">
                    03/{" "}
                    <span className="text-gray-800">
                      UI Design & Prototyping
                    </span>
                  </p>
                  <p
                    class="text-gray-500 text-sm   p-case  border-gray-300 text-gray-600"
                    style={{ lineHeight: "2" }}
                  >
                    Bringing aesthetics and motion to life: I specialize in
                    crafting visually striking UI designs that leverage
                    micro-interactions for an immersive user experience. I enjoy
                    experimenting with different design techniques and through
                    prototyping, I deliver designs that are both aesthetically
                    pleasing and functional.
                  </p>
                </div>
                <div className="p-1  mb-5">
                  <p className="pb-1 ">
                    04/{" "}
                    <span className="text-gray-800">User Testing & Iteration</span>
                  </p>
                  <p
                    class="text-gray-500 text-sm   p-case  border-gray-300 text-gray-600"
                    style={{ lineHeight: "2" }}
                  >
                    Building for user success: I strive for continuous
                    improvement by gathering user feedback, analyzing it, and
                    iterating based on their needs. I understand the importance
                    of measuring progress and I love the challenge of turning
                    user insights into meaningful interactions. I am driven by
                    the satisfaction of creating a product that truly succeeds
                    for the user.
                  </p>
                </div>
              </div>
              <div className="text-left my-8">
                <p
                  class="text-gray-500 text-sm   p-case  border-gray-300 text-gray-600"
                  style={{ lineHeight: "2" }}
                >
                  Growing up in Nairobi, I was deeply inspired by my mother's
                  salesmanship and my father's carpentry skills. My mother's
                  ability to sell through effective communication and my
                  father's attention to detail and high-quality craftsmanship
                  sparked my interest in UI/UX and product design. My dream was
                  to create something unique, beautiful and user-centric that
                  would captivate audiences just like my mother and father did
                  with their work.{" "}
                </p>
                <p
                  class="text-gray-500 text-sm pt-3  p-case  border-gray-300 text-gray-600"
                  style={{ lineHeight: "2" }}
                >
                  In High School, I participated in Kenya Science Engineering
                  Fair (KSEF) which served as a platform to showcase my ideas
                  and innovation. Through this program, I was able to take my
                  ideas to the next level by:{" "}
                </p>
                <ol class="pl-5 mt-2 space-y-1  list-decimal list-inside">
                  <li className=" text-sm py-1 border-gray-300 text-gray-600">
                    Presenting my ideas to a national audience and competing at
                    the national level.
                  </li>
                  <li className=" text-sm py-1 border-gray-300 text-gray-600">
                    Gaining valuable feedback and networking with other young
                    innovators in Kenya.
                  </li>
                  <li className=" text-sm py-1 border-gray-300 text-gray-600">
                    Representing Kenya internationally at events like CEMASTEA,
                    allowing me to gain an understanding of the global market.{" "}
                  </li>
                  <li className=" text-sm py-1 border-gray-300 text-gray-600">
                    Building a strong foundation in design, communication, and
                    usability which helped me to grow my skills and
                    understanding of the industry.{" "}
                  </li>
                </ol>
                <p
                  class="text-gray-500 text-sm pt-3  p-case  border-gray-300 text-gray-600"
                  style={{ lineHeight: "2" }}
                >
                  Realizing that I loved creating products that blended design,
                  communication, and usability, I decided to teach myself
                  Android development and later joined coding bootcamps to
                  empower myself to build my own creations.
                </p>
                <p
                  class="text-gray-500 text-sm pt-3  p-case  border-gray-300 text-gray-600"
                  style={{ lineHeight: "2" }}
                >
                  Today I am a UI/UX designer and product designer that is
                  inspired by my mother's salesmanship and my father's
                  craftsmanship. I strive to create products that are both
                  visually stunning and user-friendly, making a difference in
                  society by building products that help people live better
                  lives is truly magical for me, and my journey is to continue
                  doing this.
                </p>
              </div>
              <ol class=" text-left mt-2 space-y-1 pb-5  list-decimal list-inside">
                <li className="p-case text-sm py-1 border-gray-300 text-gray-600">
                  -Silas Silikhe
                </li>
                <li className="p-case text-sm py-1 pt-3 border-gray-300 text-gray-600">
                  L: Nairobi{" "}
                </li>
                <li className="p-case text-sm py-1 border-gray-300 text-gray-600">
                  E: Silikhesilas@gmail.com
                </li>
              </ol>
              <div>
                <div class="flex justify-center py-3 px-6 border-t border-gray-300 text-gray-600">
                  <div class="item-center  ">
                    <div
                      className="flex kk bg-gray-100 mt-3 rounded-2 px-3 py-2"
                      style={{
                        color: `${mainColor}`,
                        backgroundColor: `${opacity1}`,
                        opacity: "",
                        transition: "opacity 0.3s",
                      }}
                    >
                      <p className="text-sm pr-2">Download Resume</p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
