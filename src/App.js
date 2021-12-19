import React from 'react';
import './style.css';
import Checkbox from './Checkbox';

export default function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Checkbox defaultProp={true} />
    </>
  );
}
