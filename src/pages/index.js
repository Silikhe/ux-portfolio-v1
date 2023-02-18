import * as React from "react";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

const IndexPage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Project/>
      <Article/>
      <Footer/>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Silikhe</title>;
