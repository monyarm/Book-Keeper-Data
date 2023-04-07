import Book from '../src/book';

export default function convert(input) {
    const tempBooks = [];
    input.forEach(
        (x) => {
            tempBooks.push(new Book(x.title, x.category, x.translatedTitle, x.language, x.sources, x.description, x.author, x.selected));
        }
    )
    return tempBooks;
}