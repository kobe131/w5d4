Array.prototype.bubblesort = function() {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        swap = true; 
      }
    }
  }
  return this; 
};


String.prototype.substrings = function() {
  let results = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i+1; j <= this.length; j++) {
      results.push(this.substring(i,j));
    }
  }
  return results;
};



