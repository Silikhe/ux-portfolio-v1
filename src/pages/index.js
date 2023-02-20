import * as React from "react";
import { graphql } from "gatsby";

import Article from "../components/Article";
import Case from "../components/Case";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

export default function IndexPage ({ data }) {
  const {
    allStrapiCase: { nodes: cases },
  } = data;
  console.log(data);
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

export const query = graphql`
  query {
    allStrapiCase {
      nodes {
        design_challenge
        context
        duration
        individual_contribution
        project_type
        role
        slug
        title
        strapi_id
        about_company
        case_study {
          data {
            case_study
          }
        }
        id
        project_intro
      }
    }
  }
  
  `;

 
  

export const Head = () => <title>SILIKHE | PORTFOLIO</title>;
