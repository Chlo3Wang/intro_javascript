function menu(order){
if (order == 1){
  return "Bagel";
} else if (order == 2){
  return "Avocado Toast";
} else if (order == 3){
  return "B.L.T";
} else {
  return "There are only 3 dishes!";
}
}

console.log(menu(1));
console.log(menu(2));
console.log(menu(3));
console.log(menu(4));
