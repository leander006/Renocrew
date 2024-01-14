import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const calculate = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full space-y-12">
      <div className="bg-blue-600 p-2 text-white w-fu m-auto">
        <div className="w-fit m-auto">Pascal's triangle calculator</div>
      </div>
      <h1 className="text-blue-400 w-fit m-auto">
        Hello to pascal's triangle calculator
      </h1>
      <div></div>
    </div>
  );
}

export default App;
