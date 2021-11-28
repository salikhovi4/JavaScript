let rating = ['John', 'Kate', 'Don', 'Emma', 'Peter'];

console.log('Рейтинг студентов:');

for (let i in rating) {
  console.log(`${parseInt(i) + 1} место: ${rating[i]}`); // конкатенация двух строк
}
