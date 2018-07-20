function range(start,end) {
  if (start === end) 
  { 
    return [start];
  } else{
    return range(start,end-1).concat(end); 
  } 
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sumRec(arr.slice(1,arr.length));
  }
}

function exponent_1(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent_1(base,exp-1);
  }
}

function exponent_2(base, exp) {
  if (exp === 0) {
    return 1;
  } 
  if (exp === 1){
    return base;
  }
  if (exp % 2 === 0) {
    save = exponent_2(base,exp/2);
    return save*save;
  }
  else {
    save = exponent_2(base,(exp-1)/2);
    return base*save*save;
  }
}

function fibonacci(n) {
  if (n==2) {
    return [1,1];
  } else {
    let arr = fibonacci(n-1);
    return arr.concat(arr[n-2] + arr[n-3]);
  }
}

function deepDup(arr) {
  if (arr.length == 1) {
    return [arr[0]];
  }
  let result = [];
  arr.forEach(function(el) {
    if (el instanceof Array) {
      result.push(deepDup(el));
    } else {
      result.push(el);
    }
  });
  return result;
}

function bsearch(arr,target) {
  if (arr.length === 0)
  {
    return -1;
  }
  let mid = parseInt(arr.length/2);
  
  if (arr[mid] === target) 
  {
    return mid;
  }
  else if (arr[mid] < target)
  {
    let index = bsearch(arr.slice(mid+1,arr.length),target);
    if (index === -1) {
      return -1;
    } else {
      return index + mid + 1;
    }
  }
  else  
  {
    return bsearch(arr.slice(0,mid),target);
  }
}   
  
function mergesort(arr) {
  if(arr.length === 1) {
    return [arr[0]];
  }
  let mid = parseInt(arr.length/2); 
  
  let left = mergesort(arr.slice(0,mid));
  
  let right = mergesort(arr.slice(mid,arr.length));

  return merge(left,right);
}

function merge(left, right) {
  let result = [];
  while(left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      result.push(left.shift);
    } else {
      result.push(right.shift);
    }
  }
  return result.concat(left).concat(right);
}
let a = mergesort([4,3,2,1]);
console.log(a);