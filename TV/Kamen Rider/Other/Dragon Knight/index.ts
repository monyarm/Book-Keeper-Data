import BookGroup from '@/bookgroup';
import Real_Books from './Real Books.json';

import convert from '@book/convert';

const Dragon_Knight = new BookGroup('Dragon_Knight', [
    new BookGroup('Real Books', convert(Real_Books.books))
])

export default Dragon_Knight;
