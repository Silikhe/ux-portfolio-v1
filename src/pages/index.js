import * as React from "react";
import Article from "../components/Article";
import Case from "../components/Case";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

const IndexPage = () => {
  return (
    <div className="">
      <Layout>
        <Hero />
        <Project />
        <Article />
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>SILIKHE | PORTFOLIO</title>;
