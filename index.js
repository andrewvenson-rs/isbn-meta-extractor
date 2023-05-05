function pasteIsbns() {
  navigator.clipboard
    .readText()
    .then((isbns) => {
      const isbn_dump = document.getElementById("isbn-dump");
      isbn_dump.innerHTML = "";
      let isbn_array = isbns.split("\n").filter((isbn) => isbn !== "");
      isbn_array.forEach((isbn) => {
        const newFormattedISBN = document.createElement("p");
        newFormattedISBN.innerHTML = isbn;
        newFormattedISBN.style.borderBottom = "1px solid lightgray";
        newFormattedISBN.style.marginBottom = "10px";
        isbn_dump.appendChild(newFormattedISBN);
      });
    })
    .catch((err) => {
      console.error("Failed to read clipboard contents: ", err);
    });
}

function clearISBNDump() {
  const isbn_dump = document.getElementById("isbn-dump");
  isbn_dump.innerHTML = "";
}
