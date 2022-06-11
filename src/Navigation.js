import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ cartItemNumber }) => {
  return (
    <header className="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItemNumber})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
