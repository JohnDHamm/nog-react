import React from 'react';
import { Link } from 'react-router-dom';

const Play: React.FC = () => {
  return (
    <div>
      <h3>Play page</h3>
      <Link to="/create">stop</Link>
    </div>
  );
};

export default Play;
