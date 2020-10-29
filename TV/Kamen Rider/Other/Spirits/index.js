import Real_Books from './Real Books.json';

const Spirits = new BookGroup('Spirits', [
    new BookGroup('Real Books', convert(Real_Books.books))
])

export default Spirits;