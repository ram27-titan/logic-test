// point 1
let int = 15;

for (let i = 1; i <= int; i++) {
  if (i % 7 == 0) {
    console.log('bestada');
  } else if (i == int) {
    console.log('sukses');
  } else {
    console.log(i);
  }
}

// point 2
let input = [3, 7, 1, 2, 6, 7, 8, 9, 12, 5, 3, 12];
let output = [...new Set(input)];

output.sort(function (a, b) {
  return b - a;
});
console.log(output.join(' , '));
