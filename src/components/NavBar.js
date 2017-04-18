import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';


class NavBar extends React.Component {
  render() {
    return(
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <NavLink to="/About" label="About" />
            <NavLink to="/Repository" label="Repository" />
            <li><a>Shop Scrapper</a></li>
          </ul>
        </nav>
        <Link to="/"><h3 className="text-muted">PCMR</h3></Link>
      </div>
  );
  }
}
export default NavBar;
