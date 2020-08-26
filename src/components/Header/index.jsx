import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';

import { Container, GithubLogo, SearchForm, Links, MenuIcon, MenuBell, Menu } from './styles'

const Header = ({ themeName, setThemeName }) => {
  const [ toggleMenu, setToggleMenu ] = useState(false)

  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  function toggleMobileMenu() {
    setToggleMenu(!toggleMenu)
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Media query="(min-width: 768px)">
      {whatches => {
        return whatches ? (// Desktop
          <Container>
            <GithubLogo onClick={toggleTheme}/>
            <SearchForm onSubmit={handleSubmit}>
              <input type="text" 
                placeholder="Enter Username or Username/Repo..."
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
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
              <GithubLogo onClick={toggleTheme}/>
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
