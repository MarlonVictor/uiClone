import React from 'react';
import { Link } from 'react-router-dom';

import { Container, BgBlock, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo = () => {
  return (
    <Container>
      <BgBlock>
        <Breadcrumb>
          <RepoIcon/>
          <Link className={'username'} to={'/MarlonVictor'}>
            MarlonVictor
          </Link>

          <span>/</span>

          <Link className={'reponame'} to={'/MarlonVictor/learnJS'}>
            uiClone
          </Link>
        </Breadcrumb>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos lorem egbedshb</p>

        <Stats>
          <li>
            <StarIcon/>
            0
            <span>stars</span>
          </li>
          <li>
            <ForkIcon/>
            0
            <span>forks</span>
          </li>
        </Stats>
      </BgBlock>

      <LinkButton href={'https://github.com/MarlonVictor/uiClone'}>
        <GithubIcon/>
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
};

export default Repo;
