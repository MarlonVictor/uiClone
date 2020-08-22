import React from 'react';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

const Profile = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'MarlonVictor'}
            name={'Marlon Victor'}
            avatarUrl={'https://avatars0.githubusercontent.com/u/62356988?s=460&u=6b112c8f2e619f70b49f55b675cceb9031d180b7&v=4'}
            followers={870}
            following={17}
            company={'UNIGRANRIO'}
            location={'Rio de Janeiro'}
            email={'cmarlonvictor11@gmail.com'}
            blog={'undefined'}
          />
        </LeftSide>
        
        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'MarlonVictor'}
                  reponame={'learnJS'}
                  description={'Repo reservado para estudos, possuindo pequenas aplicações JavaScript.'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={3}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  )
};

export default Profile;