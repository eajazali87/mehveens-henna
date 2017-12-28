import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import HomePage from './components/pages/homePage';
import Products from './components/pages/products';
import Contact from './components/pages/contact';
import Samples from './components/pages/samples';
import {Footer} from '@pearson-components/elements-sdk/build/dist.compounds';

import './Assets/css/default.min.css';

const App = () => {
  const footerArrayObjects = [{text: 'First Link', href: 'www.yahoo.com'},{text: 'Second Link', href: 'www.facebook.com'}]
  const copyRights = "eajaz"

    return (
      <Router>
      <div className="App">
      <Header />
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/Products' component={Products}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact path='/Samples' component={Samples}/>
      <Footer links={footerArrayObjects} copyrightText={copyRights} singlePageStick/>
      </div>
      </Router>

    );
}

export default App;
