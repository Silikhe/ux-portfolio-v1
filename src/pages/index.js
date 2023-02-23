import * as React from "react";
import { graphql } from "gatsby";

import Article from "../components/Article";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Project from "../components/Project";
import DataContext from "../DataContext";
import Case from "../components/Case";
import Medium from "../components/Medium";

export default function IndexPage({ data }) {
  const {
    allStrapiCase: { nodes: cases },
  } = data;
  console.log(data);
  return (
    <div className="">
      <DataContext.Provider value={{ data }}>
        <Layout>
          <Hero />
          <Project cases={cases} />
          <Article />
          <Medium/>
        </Layout>
      </DataContext.Provider>
    </div>
  );
}

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
        pin
        private
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
