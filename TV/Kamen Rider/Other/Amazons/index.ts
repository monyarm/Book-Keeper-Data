import BookGroup from '@/bookgroup';
import Real_Books from './Real Books.json';

import convert from '@book/convert';

const Amazons = new BookGroup('Amazons', [
    new BookGroup('Real Books', convert(Real_Books.books))
])

export default Amazons;
