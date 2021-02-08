class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, morningBoo) {
    if (morningBoo) {
      return `Good morning, ${name}!`;
    }
    return `Hello, ${name}!`;
  }

  findBook(tomb) {
    if (this.library.shelves.fantasy[0].title === tomb) {
        this.library.shelves.fantasy = [];
        return `Yes, we have ${tomb}`;
    }
    if (this.library.shelves.fantasy[0].title !== tomb) {
        return `Sorry, we do not have ${tomb}`;
    }
  }
  calculateLateFee(number) {
    var lateFee = number * .25;
    return Math.ceil(lateFee);
  }
}



module.exports = Librarian;
