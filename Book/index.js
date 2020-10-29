import Harry_Potter from './Harry Potter.json';
import Lovecraft from './Lovecraft.json';
import Tolkien from './Lovecraft.json';

import convert from '@books/convert';

const Book = new BookGroup('Book', [
    new BookGroup('Harry Potter', convert(Harry_Potter.books)),
    new BookGroup('Lovecraft', convert(Lovecraft.books)),
    new BookGroup('Tolkien', convert(Tolkien.books))
]);

export default Book;