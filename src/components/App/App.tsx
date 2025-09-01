import React from "react";
import Counter from "../Counter";

export const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="title">Hello from Claude!</h1>
      <Counter />
    </div>
  );
};

export default App;
