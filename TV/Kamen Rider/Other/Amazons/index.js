import Real_Books from './Real Books.json';

const Amazons = new BookGroup('Amazons', [
    new BookGroup('Real Books', convert(Real_Books.books))
])

export default Amazons;