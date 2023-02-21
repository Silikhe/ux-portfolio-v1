const path = require("path");

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
