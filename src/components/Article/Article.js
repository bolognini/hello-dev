import React from "react"
import { ArticleWrapper, ArticleTitle, ArticleContent } from "./Article.style"

const Article = ({ attributes, children }) => (
  <ArticleWrapper>
    <ArticleTitle>{attributes.title}</ArticleTitle>
    {attributes.date}
    {attributes.tags.map(i => i)}
    <ArticleContent>
      {/* <Tags list={props.tags} /> */}
      <div dangerouslySetInnerHTML={{ __html: children }} />
    </ArticleContent>
  </ArticleWrapper>
)

export default Article
