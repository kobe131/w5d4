const NUMS = [1, 2, 3, 4, 5];
Array.prototype.myEach = function (callback) {
  for(let i = 0; i<this.length; i++) {
    callback(this[i]);
  }
};
// NUMS.myEach((num) => {
//   console.log(`square of ${num} is ${num * num}`);
// });


Array.prototype.myMap = function(callback) {
  let result = [];
  
  this.myEach( (num) => {
    
    result.push(callback(num));
  });
  return result;
};

a = NUMS.myMap( (num) => {
  return num * 2;
});
console.log(a);

Array.prototype.myReduce = function( callback, initialValue) {
  let acc = initialValue;
  if (initialValue === undefined) {
    acc = 0;
  }
  
  this.myEach( (num) => {
    acc = callback(acc, num);
  });
  return acc;
};

// a = NUMS.myReduce( (acc, el) => {
//   return acc + el;
// }, 0);

// let a = [11, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// });
// console.log(a);