let tableAppeared = false;
const body = document.querySelector("body");
const table = document.createElement("table");

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
  createTable();
}

function createTable() {
  if (myLibrary.length === 0) return;
  table.innerHTML = ``;
  const firstRow = document.createElement("tr");
  firstRow.innerHTML += `             
                <th>Nr</th>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Read</th>`;
  table.appendChild(firstRow);
  for (book of myLibrary) {
    const row = document.createElement("tr");
    row.innerHTML = `
                <th>${myLibrary.indexOf(book) + 1}</th>
                <th>${book.title}</th>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
                <td><button data-key="${myLibrary.indexOf(
                  book
                )}">Delete</button></td>
    `;
    table.appendChild(row);
  }
  body.appendChild(table);
  getDeleteOption();
  tableAppeared = true;
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

function getDeleteOption() {
  const deleteButtons = document.querySelectorAll("td>button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(myLibrary);
      myLibrary.splice(button.dataset.key, 1);
      console.log(myLibrary);
      if (myLibrary.length === 0) {
        table.innerHTML = ``;
        tableAppeared = false;
        return;
      }
      createTable();
    });
  });
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

function addBookToLibrary() {
  // do stuff here
}
