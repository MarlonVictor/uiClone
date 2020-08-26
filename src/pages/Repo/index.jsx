import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, BgBlock, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo = () => {
  const { username, reponame } = useParams()
  const [data, setData] = useState('')

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/repos/${username}/${reponame}`),
      fetch(`https://api.github.com/users/${username}/repos`)
    ]).then(async responses => {
      const [info, x] = responses

      if (info.status === 404) {
        setData({ error: 'User not found!' })
        return
      }

      const repo = await info.json()
      setData({ repo })
    })
  }, [reponame, username])

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  return (
    <Container>
      <BgBlock>
        <Breadcrumb>
          <RepoIcon />
          <Link className={'username'} to={`/${username}`}>
            {username}
          </Link>

          <span>/</span>

          <Link className={'reponame'} to={`/${username}/${reponame}`}>
            {reponame}
          </Link>
        </Breadcrumb>

        <p>{data.repo?.description}</p>

        <Stats>
          <li>
            <StarIcon />
              {data.repo?.stargazers_count}
            <span>stars</span>
          </li>
          <li>
            <ForkIcon />
              {data.repo?.forks}
            <span>forks</span>
          </li>
        </Stats>
      </BgBlock>

      <LinkButton href={data.repo?.html_url}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
};

export default Repo;
