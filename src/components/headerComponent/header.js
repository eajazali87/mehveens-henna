import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class header extends Component {
  render() {
    return (
      <header>

      <div className="logo">
      LOGO
      </div>

      <nav>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/Products">Products</Link>
      </li>
      <li>
      <Link to="/Contact">Contact</Link>
      </li>
      <li>
      <Link to="/Samples">Samples</Link>
      </li>
      </ul>
      </nav>
      </header>
    );
  }
}

export default header;
