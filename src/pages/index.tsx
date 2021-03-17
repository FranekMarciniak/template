import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Index = ({ location }) => {
	return (
		<Layout>
			<SEO title="Home" />
			<h1>heello world</h1>
		</Layout>
	);
};

export default Index;

// export const pageQuery = graphql`
// 	query {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
// 			nodes {
// 				excerpt
// 				fields {
// 					slug
// 				}
// 				frontmatter {
// 					date(formatString: "MMMM DD, YYYY")
// 					title
// 					description
// 				}
// 			}
// 		}
// 	}
// `;
