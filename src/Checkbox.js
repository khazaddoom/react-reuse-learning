import React from 'react';
import withToggle from './withToggle';

function Checkbox({ toggle, setToggle, defaultProp }) {
  return (
    <>
      <input
        type="checkbox"
        checked={toggle || defaultProp}
        onChange={() => setToggle(!toggle)}
        id="checker"
      />
      <label for="checker">{toggle ? 'CHECKED' : 'NOT-CHECKED'}</label>
    </>
  );
}

export default withToggle(Checkbox);
