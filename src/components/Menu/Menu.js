import React from "react"
import { MenuWrapper, MenuItem, MenuSeparator } from "./Menu.style"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Menu = () => (
  <MenuWrapper>
    <MenuItem>
      <AniLink fade to="/" activeClassName="active">
        about
      </AniLink>
    </MenuItem>
    <MenuSeparator>|</MenuSeparator>
    <MenuItem>
      <AniLink fade to="/writing" activeClassName="active">
        writing
      </AniLink>
    </MenuItem>
  </MenuWrapper>
)

export default Menu
