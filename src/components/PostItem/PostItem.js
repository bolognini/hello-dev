import React from "react"
import { Card, Tags, PostTitle, PostSummary } from './PostItem.style'
import { Link } from "gatsby"

const ContactLinks = ({ post, slug }) => (
  <Link to={`/${slug}`}>
    <Card>
      <Tags>
        <ul>
          {post.tags.map((item, i) => <li key={item}>{item}{i<post.tags.length-1?',':''}</li>)}
        </ul>
      </Tags>
      <PostTitle>{post.title}</PostTitle>
      <PostSummary>{post.description}</PostSummary>
    </Card>
  </Link>
)

export default ContactLinks
