import React from "react"
import { LogoWrapper, LogoItem } from "./Logo.style"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Logo = () => (
  <LogoWrapper>
    <LogoItem>
      <AniLink cover to="/" bg="#2A2935" direction="right" duration={0.7}>
        nayara.dev
      </AniLink>
    </LogoItem>
  </LogoWrapper>
)

export default Logo
