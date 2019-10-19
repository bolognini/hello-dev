import React from "react"
import {
  Card,
  StyledLink,
  Tags,
  PostTitle,
  PostSummary,
} from "./PostItem.style"

const ContactLinks = ({ post, slug }) => (
  <StyledLink
    cover
    activeClassName="active"
    bg="#2A2935"
    direction="bottom"
    duration={0.7}
    to={`${slug}`}
  >
    <Card>
      <Tags>
        <ul>
          {post.tags.map((item, i) => (
            <li key={item}>
              {item}
              {i < post.tags.length - 1 ? "," : ""}
            </li>
          ))}
        </ul>
      </Tags>
      <PostTitle>{post.title}</PostTitle>
      <PostSummary>{post.description}</PostSummary>
    </Card>
  </StyledLink>
)

export default ContactLinks
