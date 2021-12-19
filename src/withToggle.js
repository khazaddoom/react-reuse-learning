import React from 'react';

export default function withToggle(Component) {
  return function WithToggle(props) {
    const [toggle, setToggle] = React.useState(false);
    return <Component toggle={toggle} setToggle={setToggle} {...props} />;
  };
}
