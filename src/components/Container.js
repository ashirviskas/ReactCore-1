import React from 'react';
import NavBar from './NavBar';

const Container = props => (
  <div className="container">
        <NavBar/>
      {props.children}
  </div>
);

Container.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
};

export default Container;
