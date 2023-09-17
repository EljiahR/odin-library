

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
Book.prototype.info = function(){
    return this.title
}



const myLibrary = [];

function addToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

addToLibrary('Don Quixote', 'Miguel De Cervantes Saavedra', 1072, false);
addToLibrary('The Hobbit', 'J. R. R. Tolkien', 300, false);
addToLibrary('The Lion, the Witch and the Wardrobe', 'C. S. Lewis', 208, true);
addToLibrary('Title', 'Author', 1, false);


const cardSection = document.querySelector('.book-cards');

myLibrary.forEach(book =>{
    let card = document.createElement("div");
    card.classList.add('book-card');
    let title = document.createElement('h2');
    title.innerText = book.title;
    let author = document.createElement('h3');
    author.innerText = book.author;
    let pages = document.createElement('p');
    pages.innerText = `Pages: ${book.pages}`;
    let readStatus = document.createElement('p');
    if(book.read){
        readStatus.innerText = "Read"
    }else{
        readStatus.innerText = "Not Read"
    }
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readStatus);
    cardSection.appendChild(card);

})
const toggleOverlay = () =>{
    if(overlay.classList.contains('hidden')){
        overlay.classList.remove('hidden');
    }else{
        overlay.classList.add('hidden')
    }
}

const overlay = document.querySelector('#overlay')
const addBookButton = document.querySelector('#add-book');
addBookButton.addEventListener('click', toggleOverlay);
overlay.addEventListener('click', function(e){
    if(e.target !== this){
        return;
    }else{
        toggleOverlay();
    }
});