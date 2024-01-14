import { useState } from "react";

function generatePascalsTriangle(rows) {
  const triangle = [];
  if (rows > 16) {
    alert("Please enter less then 17");
    return triangle;
  }
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(row);
  }
  return triangle;
}

function App() {
  const [rows, setRows] = useState("");
  const pascalsTriangle = generatePascalsTriangle(rows);
  return (
    <>
      <div className="bg-blue-600 p-2 text-white w-fu m-auto">
        <div className="w-fit m-auto">Pascal's triangle calculator</div>
      </div>
      <div className="container mx-auto mt-8 max-w-screen-md px-4 sm:px-6 lg:px-8">
        <label className="block mb-4">
          Number of Rows:
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            className="border border-black focus:outline-none p-2 ml-2"
          />
        </label>
        <div className="mb-8 overflow-x-auto">
          {pascalsTriangle.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center items-center">
              {row.map((number, columnIndex) => (
                <div key={columnIndex} className="p-2">
                  {number}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
