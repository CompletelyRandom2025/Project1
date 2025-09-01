import React, { useState } from "react";

export const NavBar: React.FC = ({}) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((c) => c+1);
  };

  return (
    <div className="counter">
      <button type="button" onClick={increment}>Increment</button>
      <label>Counter: {counter}</label>
    </div>
  );
};

export default NavBar;
