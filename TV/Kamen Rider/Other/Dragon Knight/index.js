import Real_Books from './Real Books.json';

const Dragon_Knight = new BookGroup('Dragon_Knight', [
    new BookGroup('Real Books', convert(Real_Books.books))
])

export default Dragon_Knight;