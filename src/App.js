import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Layout from './components/Layout/Layout';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/service" exact component={Services} />
        </Layout>
      </Switch>
    </BrowserRouter>


  );
};

export default App;