// src/components/IntermediaryComponent.tsx
import React from 'react';

const IntermediaryComponent: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div>{children}</div>;
};

export default IntermediaryComponent;
