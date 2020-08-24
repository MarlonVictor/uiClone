import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Profile from './pages/Profile';

import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>

      <Switch>
        <Route path="/" component={Profile} />
        <Route path="/:username" component={Profile} />
        {/* <Route path="/:username/:reponame" component={Repo} /> */}
      </Switch>

      <Footer/>
      <GlobalStyle/>
    </BrowserRouter>
  )
};

export default App;