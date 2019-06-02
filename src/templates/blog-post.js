import React from "react"
import Article from '../components/Article'
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const postProps = this.props.data.site.siteMetadata

    return (
      <Layout>
        <Article attributes={postProps}>
        {/* <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        /> */}
        {/* <h1>{post.frontmatter.title}</h1> */}
        {/* <p>
          {post.frontmatter.date}
        </p> */}
        {post.html}

        {/* <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul> */}
      </Article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`