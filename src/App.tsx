// src/App.tsx
import React from 'react';

import IntermediaryComponent from './components/IntermediaryComponent';
import DisplayComponent from './components/DisplayComponent';
import FormComponent from './components/FormComponent';

const App: React.FC = () => {
  return (
    <div>
      <h1>Redux Form Example</h1>
      <FormComponent />
      <IntermediaryComponent>
        <DisplayComponent />
      </IntermediaryComponent>
    </div>
  );
};

export default App;
