import React from "react"
import { MenuWrapper, MenuItem, MenuSeparator } from "./Menu.style"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Menu = () => (
  <MenuWrapper>
    <MenuItem>
      <AniLink
        cover
        to="/"
        activeClassName="active"
        bg="#2A2935"
        direction="right"
        duration={0.7}
      >
        about
      </AniLink>
    </MenuItem>
    <MenuSeparator>|</MenuSeparator>
    <MenuItem>
      <AniLink
        cover
        to="/writing"
        activeClassName="active"
        bg="#2A2935"
        duration={0.7}
      >
        writing
      </AniLink>
    </MenuItem>
  </MenuWrapper>
)

export default Menu
