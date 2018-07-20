Array.prototype.uniq = function() {
  let result = [];
  for(i = 0; i < this.length;i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function() {
  let result =[];
  for(i = 0; i< this.length; i++) {
    for(j = i+1; j < this.length; j++) {
      if (this[i] + this[j] == 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  let result = [];
  for(let row = 0; row < this[0].length; row++) {
    result[row] = [];
    for(let col = 0; col < this.length; col++) {

      result[row][col] = this[col][row];
    }
  }
  return result;
  
};