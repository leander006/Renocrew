# Welcome to pascal's triangle calculator
- Here you can enter number of rows you want to generate triangle for
- So at max you can create 16 rows

## Main logic of generating triangle is as follows

``
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
``
