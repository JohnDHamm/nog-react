import React from 'react';
import { Link } from 'react-router-dom';

const Create: React.FC = () => {
  return (
    <div>
      <h3>Create page</h3>
      <Link to="/play">play</Link>
    </div>
  );
};

export default Create;
