let myLibrary = [];
const submitButton = document.querySelector("button[type=submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  getData();
});

function getData() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  const anotherBook = new Book(title, author, pages, read);
  myLibrary.push(anotherBook);
  console.log(myLibrary);
}

function createTable() {
    
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
//   this.info = function () {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
//   };
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

function addBookToLibrary() {
  // do stuff here
}
