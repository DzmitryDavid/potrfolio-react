import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import About from './pages/About';
import Nav from './components/Nav';
import Contacts from './pages/Contacts';
import GlobalStyles from './GlobalStyles';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="/projects/:id">
            <ProjectDetails />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
