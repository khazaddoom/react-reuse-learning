import React from 'react';

export default function withToggle(Component) {
  return function WithToggle() {
    return <Component />;
  };
}
