import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionWrapper from "../components/SectionWrapper"
import Title3D from "../components/Title3D"
import PostList from "../components/PostList"
import PostItem from "../components/PostItem"

class Writing extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="All posts" />
        <SectionWrapper>
          <Title3D>writing</Title3D>
        </SectionWrapper>
        <PostList>
          {posts.map(({ node }) => {
            return (
              <PostItem
                post={node.frontmatter}
                slug={node.fields.slug}
                key={node.fields.slug}
              />
            )
          })}
        </PostList>
      </Layout>
    )
  }
}

export default Writing

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
