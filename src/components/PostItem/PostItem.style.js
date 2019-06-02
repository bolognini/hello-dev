import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`

export const Card = styled.div`
  width: 100%;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: auto auto;
  grid-template-areas: "tag title"
                       "tag summary";
  cursor: pointer;
  margin-bottom: 40px;
`
export const Tags = styled.div`
  grid-area: tag;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
  text-orientation: sideways;
  
  ul {
    padding: 0px 9%;
    border-left: 1px solid var(--color-1);
  }

  li{
    display: inline-block;
    font-size: 20px;
    font-size: 1.11111rem;
    text-align: left;
    white-space: nowrap;
    color: var(--color-1);
    padding: 5px 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`
export const PostTitle = styled.div`
  grid-area: title;
  font-family: 'Barlow Condensed', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 95%;
  letter-spacing: -0.04em;
  color: var(--color-1);
  padding: 20px 30px;
`
export const PostSummary = styled.div`
  grid-area: summary;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  line-height: 125%;
  color: var(--color-1);
  padding: 0 30px 20px;
`