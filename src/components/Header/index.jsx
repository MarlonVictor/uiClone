import React, { useState } from 'react';
import Media from 'react-media'

import { Container, GithubLogo, SearchForm, Links, MenuIcon, MenuBell, Menu } from './styles'

const Header = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false)

  function toggleMobileMenu() {
    setToggleMenu(!toggleMenu)
  }

  return (
    <Media query="(min-width: 768px)">
      {whatches => {
        return whatches ? (// Desktop
          <Container>
            <GithubLogo/>
            <SearchForm>
              <input type="text" placeholder="Enter Username or Username/Repo..."/>
            </SearchForm>
            <Links>
              <p>Pull requests</p>
              <p>Issues</p>
              <p>Marketplace</p>
              <p>Explore</p>
            </Links>
          </Container>
        ):
        (// Mobile
          <>
            <Container className="mobile">
              <MenuIcon onClick={toggleMobileMenu}/>
              <GithubLogo/>
              <MenuBell/>
            </Container>

            {toggleMenu && 
              <Menu>
                <SearchForm className="mobile">
                  <input type="text" placeholder="Enter Username or Username/Repo..."/>
                </SearchForm>
                <Links className="mobile">
                  <p>Pull requests</p><hr/>
                  <p>Issues</p>
                  <p>Marketplace</p>
                  <p>Explore</p>
                </Links>
              </Menu>
            }
          </>
        )
      }}
    </Media>
  )
};

export default Header;
