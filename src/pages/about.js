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
      typeof window !== "undefined" && window.document.querySelectorAll(".panel")
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
      panels.forEach((panel) =>
        panel.removeEventListener("click", toggleOpen)
      );
      panels.forEach((panel) =>
        panel.removeEventListener("transitionend", toggleActive)
      );
    };
  }, []);

  return (
    <Layout>
      <div className="about mx-20 block w-ful p-3 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="panels">
          <div class="panel panel1">
            <p className="text-sm">Hey</p>
            <p>Let's</p>
            <p>Go</p>
          </div>
          <div class="panel panel3">
            <p>Experience</p>
            <p>It</p>
            <p>Today</p>
          </div>
          <div class="panel panel4">
            <p>Give</p>
            <p>All</p>
            <p>You Can</p>
          </div>
          <div class="panel panel5">
            <p>Life</p>
            <p>In</p>
            <p>Motion</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
