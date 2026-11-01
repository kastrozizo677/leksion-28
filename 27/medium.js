const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,

  // Method to return the full name
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

// Example usage:
console.log(person.fullName()); // Output: Jane Doe
console.log(person.age);        // Output: 28