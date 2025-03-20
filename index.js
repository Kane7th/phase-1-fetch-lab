function fetchBooks() {
  // Fetching data from the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())  // Convert the response to JSON
    .then((json) => {
      // Pass the parsed JSON data to the renderBooks function
      renderBooks(json);
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');  // Select the <main> element in the DOM
  books.forEach(book => {
    const h2 = document.createElement('h2');  // Create a new <h2> element
    h2.innerHTML = book.name;  // Set the book title as the inner HTML
    main.appendChild(h2);  // Append the <h2> to the <main> element
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Fetch books when the page content is loaded
  fetchBooks();
});
