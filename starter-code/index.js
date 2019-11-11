class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (this.length < pos) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    // ...
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1];
      //
    }
  }

  min() {
    // ...
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    // ...
    return this.items.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  average() {
    // ...
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return (
        this.items.reduce((a, b) => {
          return a + b;
        }, 0) / this.items.length
      );
    }
  }
}
module.exports = SortedList;
