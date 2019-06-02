import React from "react"
import { List } from './PostList.style'

const PostList = props => (
  <List>
    {props.children}
  </List>
)

export default PostList
