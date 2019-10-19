import React from "react"

import SectionWrapper from "../components/SectionWrapper"
import Title3D from "../components/Title3D"
import ContentWrapper from "../components/ContentWrapper"
import ContentTitle from "../components/ContentTitle"
import Content from "../components/Content"
import ContactLinks from "../components/ContactLinks"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scrolldown from "../components/Scrolldown"

const IndexPage = () => (
  <Layout>
    {/* <GlobalStyle /> */}
    <SEO title="Home" />
    <SectionWrapper tall>
      <Title3D>hello!</Title3D>
      <Scrolldown />
    </SectionWrapper>
    <SectionWrapper>
      <ContentWrapper>
        <ContentTitle>Nice to meet you!</ContentTitle>
        <Content>
          I'm a front end developer who likes building visually cool things. I
          write HTML, CSS, and Javascript, mainly (but also some random things @
          Twitter).
          <br />
          <br />
          I build things to help small and medium entrepreneurs receive payments
          and manage their finances @ Wirecard Brasil, a company located in my
          hometown of São Paulo, SP, where I was born and raised.
          <br />
          <br />
          When I’m not working, I like to make drawings with CSS, try to make
          something with p5.js, and play something on my Nintendo Switch. All
          this while making some terrible <strong>dad jokes</strong>.
        </Content>
      </ContentWrapper>
    </SectionWrapper>
    <SectionWrapper>
      <ContentWrapper>
        <ContentTitle>
          Skills <span>(or what I like to do)</span>
        </ContentTitle>
        <Content>
          If you ask my mom, she’ll probably say that I can fix your printer, my
          dad would say that I can paint your walls (just like he taught me) and
          my boyfriend would tell you about my cooking skills… I hope.
          <br />
          <br />
          But here’s a (rough) list of what I actually know/can do:
        </Content>
      </ContentWrapper>
    </SectionWrapper>
    <SectionWrapper>
      <ContentWrapper vertical>
        <ContentTitle noFlex>
          Where am I?<span>You can find me on these places</span>
        </ContentTitle>
        <ContactLinks />
      </ContentWrapper>
    </SectionWrapper>
  </Layout>
)

export default IndexPage
