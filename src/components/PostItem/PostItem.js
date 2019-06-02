import React from "react"
import { Card, StyledLink, Tags, PostTitle, PostSummary } from './PostItem.style'

const ContactLinks = ({ post, slug }) => (
  <StyledLink to={`/${slug}`}>
    <Card>
      <Tags>
        <ul>
          {post.tags.map((item, i) => <li key={item}>{item}{i<post.tags.length-1?',':''}</li>)}
        </ul>
      </Tags>
      <PostTitle>{post.title}</PostTitle>
      <PostSummary>{post.description}</PostSummary>
    </Card>
  </StyledLink>
)

export default ContactLinks
