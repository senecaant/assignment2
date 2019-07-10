import React from 'react';

import Card from '../../components/Card/Card';

const home = () => {
  return (
      <div className="home">
        <Card>
          <h1>You fixed the Home Page!</h1>
          <p>Here is a nice hint</p>
          <p>Whenever you run into errors that start with "Unexpected token...", it probably 
            means your previous line of code is incomplete.</p>
        </Card>
      </div>
  );
};

export default home;

