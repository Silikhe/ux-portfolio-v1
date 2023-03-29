const path = require("path");
const qs = require('qs');


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allStrapiCase {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allStrapiCase.nodes.forEach(caseNode => {
    createPage({
      path: `/case-study/${caseNode.slug}`,
      component: path.resolve(`src/templates/case-study-template.js`),
      context: {
        slug: caseNode.slug,
      },
    });
  });
};

const params = () => qs.stringify(
  {
     populate: "*"
  }
);

const ID = 3;
const CONTENT_TYPE = "cases"
const BASE_URL = `http://localhost:1338/api/${CONTENT_TYPE}/${ID}?populate=*`


const QUERY_1 = BASE_URL + params();


console.log(QUERY_1) // No Populate Flags
