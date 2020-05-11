import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h3>Home page</h3>
      <Link to="/create">Start demo</Link>
    </div>
  );
};

export default Home;
