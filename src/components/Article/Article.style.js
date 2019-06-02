import styled from "styled-components"

export const ArticleWrapper = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 952px;
  padding: 30vh 0 100px;
  margin: 0 auto;
`

export const ArticleTitle = styled.h1`
  color: var(--color-1);
  font-family: Barlow Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  margin: 0 30px 80px;
  text-align: center;
  letter-spacing: -0.04em;
  line-height: 95%;
  flex: 12;
`

export const ArticleContent = styled.div`
  display: block;
  width: 100%;
  max-width: 895px;
  margin: 0 auto;

  background: #FFFFFF;
  color: var(--color-1);
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.04);

  padding: 30px 40px;

  p {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 23px;
  }

  pre {
    background-color: var(--color-1);
    color: var(--color-4);
    margin: 20px -40px;
    padding: 30px 60px;
    font-family: 'Fira Code';
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;

    &.hero {
      margin: 0 -40px;
      width: calc(100% + 80px);
    }
  }

  strong {
    font-weight: bold;
  }

  a {
    color: var(--color-5);
    text-decoration: underline;
  }
`