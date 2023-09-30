const euros = [29.76, 41.85, 46.5];
console.log(
  euros.reduce((total, amount) => {
    console.log(total);
    return total + amount;
  })
);
