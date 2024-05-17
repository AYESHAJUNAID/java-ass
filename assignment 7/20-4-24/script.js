let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; 1 < list.length; i++) {
  if (list[i] % 3 === 0 && list[i] % 5 === 0) {
    list[i] = "threeFive";
  } else if (list[i] % 3 === 0) {
    list[i] = "three";
  } else if (list[i] % 5 === 0) {
    list[i] = "five";
  }
}
console.log(list);
