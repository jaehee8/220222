
// let a = ["홍성학", "박재희", "최보영"];
// a.push("양정원");
// console.log(a);

let arr = ["홍성학", "박재희", "최보영"];
function a(array, variable) {
  array.push(variable);
  return array;
}
console.log(arr);
a(arr, "양정원");
console.log(arr);