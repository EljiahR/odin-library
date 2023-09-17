

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
Book.prototype.info = function(){
    return this.title
}

const donQuixote = new Book('Don Quixote', 'Miguel De Cervantes Saavedra', 1072, false);
const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 300, false);
const theLWW = new Book('The Lion, the Witch and the Wardrobe', 'C. S. Lewis', 208, true);

const myLibrary = [donQuixote, theHobbit, theLWW];

function addToLibrary(newBook){
    myLibrary.push(newBook)
}

const dummy = new Book('dum', 'dum', 1, false)
addToLibrary(dummy);
myLibrary.forEach(book=>{
    console.log(book.title)
})

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