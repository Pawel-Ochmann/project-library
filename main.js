let tableAppeared = false;
const body = document.querySelector('body');
const table = document.createElement('table');
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.wasRead = 'Has been read';
  this.notRead = 'Not read yet';
  //   this.info = function () {
  //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  //   };
}

function toggleRead() {
  this.read = !this.read;
  createTable();
}

function bookInfo(boolean) {
  if (boolean) return this.wasRead;
  return this.notRead;
}

Book.prototype = {
  toggleRead,
  bookInfo,
};

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const diuna = new Book('The Diuna', 'Frank Herbert', 784, false);
const solaris = new Book('Solaris', 'Stanisław Lem', 204, true);
console.log(Book.prototype);

const myLibrary = [];
myLibrary.push(hobbit, diuna, solaris);
createTable();

const submitButton = document.querySelector('button[type=submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  getData();
});

function createTable() {
  if (myLibrary.length === 0) return;
  table.innerHTML = '';
  const firstRow = document.createElement('tr');
  firstRow.innerHTML += `             
                <th>Nr</th>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Read</th>`;
  table.appendChild(firstRow);
  for (book of myLibrary) {
    let readChecked = '';
    if (book.read === true) {
      readChecked = 'checked';
    }

    const row = document.createElement('tr');
    row.innerHTML = `
                <th>${myLibrary.indexOf(book) + 1}</th>
                <th>${book.title}</th>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>
                <div class="readBox">
                ${book.bookInfo(book.read)}
                <input type='checkbox' class="readCheck" data-key="${myLibrary.indexOf(
                  book
                )}" ${readChecked}>
                </div>
                </td>
                <td><button class="delete" data-key="${myLibrary.indexOf(
                  book
                )}">Delete</button></td>`;
    table.appendChild(row);
  }
  body.appendChild(table);
  getDeleteOption();
  addReadCheckbox();
  tableAppeared = true;
}

function getData() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  const anotherBook = new Book(title, author, pages, read);
  myLibrary.push(anotherBook);
  createTable();
}

function getDeleteOption() {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      myLibrary.splice(button.dataset.key, 1);
      if (myLibrary.length === 0) {
        table.innerHTML = '';
        tableAppeared = false;
        return;
      }
      createTable();
    });
  });
}

function addReadCheckbox() {
  const readCheckInputs = document.querySelectorAll('.readCheck');
  readCheckInputs.forEach((input) => {
    input.addEventListener('click', () => {
      // myLibrary[input.dataset.key].read = input.checked;
      myLibrary[input.dataset.key].toggleRead();
    });
  });
}
