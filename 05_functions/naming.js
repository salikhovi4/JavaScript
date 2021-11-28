// function qasdwe(n, m) {
//   let x = Math.abs(m - n);
//   let y = Math.round(Math.random() * x);
//   let z = Math.min(n, m);
//   return z + y;
// }

// как надо
function generateRandomNumber(n, m) {
  let range = Math.abs(m - n);
  let numberInRange = Math.round(Math.random() * range);
  let min = Math.min(n, m);
  return min + numberInRange;
}

// имя должно соответсвовать содержанию функции (экономит время и нервы вам и сотрудникам, которые пользуются вашим кодом
// имя не должно быть слишком общим (будет использоваться не по назначению)
// имя не должно быть слишком частным (может остаться незамеченной, хотя она отлично подходит под задачу)

// snake_case python
// camelCase js
// PascalCase js
// kebab-case html, css
