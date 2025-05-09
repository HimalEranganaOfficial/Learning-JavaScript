let books = [
    {
        title: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        releaseYear: 1960
    },
    {
        title: "1984",
        authorName: "George Orwell",
        releaseYear: 1949
    },
    {
        title: "Pride and Prejudice",
        authorName: "Jane Austen",
        releaseYear: 1813
    },
    {
        title: "Madol Doova",
        authorName: "Martin Wickramasinghe",
        releaseYear: 1947
    },
    {
        title: "Gamperaliya",
        authorName: "Martin Wickramasinghe",
        releaseYear: 1944
    },
    {
        title: "2001: A Space Odyssey",
        authorName: "Arthur C. Clarke",
        releaseYear: 1968
    }
];

const sortByYear = (book1, book2) => {
    if (Number(book1.releaseYear) < Number(book2.releaseYear)) {
        return -1
    } else if (Number(book1.releaseYear) > Number(book2.releaseYear)) {
        return 1
    } else {
        return 0
    }
};

const filterByYear = year => books.filter((element) => element.releaseYear > Number(year));

let filteredBooks = filterByYear("1932");

filteredBooks = filteredBooks.sort(sortByYear);

function sort(catalog) {
    let maxI = catalog.length - 1;
    for (let i = 0; i <= maxI; i++) {
        
    }
}


console.log(filteredBooks);
