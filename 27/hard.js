function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.getSummary = function() {
    return `${this.title} by ${this.author} has ${this.pages} pages.`;
  };
}

// Example usage:
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310);

console.log(book1.getSummary());
// Output: The Hobbit by J.R.R. Tolkien has 310 pages.