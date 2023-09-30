function color2grey(image) {
  const averages = image.map((arrays) =>
    arrays.map((items) => items.reduce((a, b) => a + b) / 3)
  );
  averages;
}

console.log(
  color2grey([
    [
      [123, 231, 12],
      [56, 43, 124],
    ],
    [
      [78, 152, 76],
      [64, 132, 200],
    ],
  ])
);

// [
//     [ [122, 122, 122], [74, 74, 74] ],
//     [ [102, 102, 102], [132, 132, 132] ]
//    ]
