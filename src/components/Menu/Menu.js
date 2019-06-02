import React from 'react'
import { MenuWrapper, MenuItem, MenuSeparator } from './Menu.style'
import { Link } from "gatsby"

const Menu = () => (
  <MenuWrapper>
    <MenuItem>
      <Link to='/' activeClassName='active'>
        about
      </Link>
    </MenuItem>
    <MenuSeparator>|</MenuSeparator>
    <MenuItem>
      <Link to='/writing' activeClassName='active'>
        writing
      </Link>
    </MenuItem>
  </MenuWrapper>
)

export default Menu
