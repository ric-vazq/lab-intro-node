class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length; 
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error('OutofBounds')
    } else return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList') 
    } else return this.items[this.length - 1]
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList') 
    } else return this.items[0]
  }

  sum() {
    return this.items.reduce((acc, currentValue) => acc + currentValue, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList') 
    } else return this.sum()/this.length
  }
}

module.exports = SortedList;
