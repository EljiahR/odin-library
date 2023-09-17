

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
Book.prototype.info = function(){
    return this.title
}
Book.prototype.toggleRead = function(){
    this.read = !this.read
}

function addToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function refreshLibrary() {
    removeAllChildNodes(cardSection)
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
        let deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete Book"
        deleteButton.id = `delete${myLibrary.indexOf(book)}`
        deleteButton.classList.add("btn")
        deleteButton.classList.add("delete-btn")
        let readToggleButton = document.createElement('button');
        readToggleButton.innerText = "Toggle Read Status"
        readToggleButton.id = `read${myLibrary.indexOf(book)}`
        readToggleButton.classList.add("btn")
        readToggleButton.classList.add("read-btn")
       
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
        card.appendChild(deleteButton);
        card.appendChild(readToggleButton);
        card.dataset.key = myLibrary.indexOf(book);
        cardSection.appendChild(card);
        deleteButton.addEventListener('click', function(e){
            e.stopPropagation()
            deleteBook(e.target.id.charAt(6));
        });
        readToggleButton.addEventListener('click', function(e){
            e.stopPropagation()
            toggleReadStatus(e.target.id.charAt(4));
        });
    })
}

function toggleOverlay(){
    if(overlay.classList.contains('hidden')){
        overlay.classList.remove('hidden');
    }else{
        overlay.classList.add('hidden')
    }
    formTitle.value ='';
    formAuthor.value ='';
    formNumOfPages.value = '';
}

function deleteBook(index){
    myLibrary.splice(index,1)
    refreshLibrary();
}

function toggleReadStatus(index){
    myLibrary[index].toggleRead();
    refreshLibrary();
}

const myLibrary = [];

addToLibrary('Don Quixote', 'Miguel De Cervantes Saavedra', 1072, false);
addToLibrary('The Hobbit', 'J. R. R. Tolkien', 300, false);
addToLibrary('The Lion, the Witch and the Wardrobe', 'C. S. Lewis', 208, true);
addToLibrary('Title', 'Author', 1, false);


const cardSection = document.querySelector('.book-cards');




refreshLibrary();



const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formNumOfPages = document.getElementById('pages');
const formReadStatus = document.getElementById('read-status');

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

const bookForm = document.getElementById('add-book-form');
bookForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    addToLibrary(formTitle.value, formAuthor.value, formNumOfPages.value, formReadStatus.checked)
    refreshLibrary();
    toggleOverlay(); 
})