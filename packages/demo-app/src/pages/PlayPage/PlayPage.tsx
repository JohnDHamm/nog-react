import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake } from 'ui-library';

const Play: React.FC = () => {
  return (
    <div>
      <h3>Play page</h3>
      <Link to="/create">stop</Link>
      <div style={{ width: '400px' }}>
        <Snowflake
          innerColor="white"
          innerBorderColor="grey"
          outerBorderColor="green"
        />
      </div>
    </div>
  );
};

export default Play;
