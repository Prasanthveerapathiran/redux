// src/components/DisplayComponent.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const DisplayComponent: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form);

  return (
    <div>
      <h2>Form Data:</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default DisplayComponent;
