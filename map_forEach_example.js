const arr_1 = [10, 20, 30, 40];

const mapRes = arr_1.map((item, index) => {
  console.log(
    "map'e gönderilen arrow function'ın parametreleri: ",
    "item: ",
    item,
    "index: ",
    index
  );
  return item * 2;
});

console.log(">>> mapRes: ", mapRes);
console.log("---------------------------------------------------------");

const arr_2 = [20, 30, 40, 50];

// const newArr = [];
const forEachRes = arr_2.forEach((item, index) => {
  console.log(
    "forEach'e gönderilen arrow function'ın parametreleri: ",
    "item: ",
    item,
    "index: ",
    index
  );

  // newArr.push(item * 3);
  return item * 3;
});
console.log(">>> forEachRes: ", forEachRes);
// console.log(">>> newArr: ", newArr);
