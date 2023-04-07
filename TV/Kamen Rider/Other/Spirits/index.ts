import BookGroup from '@/bookgroup';
import Real_Books from './Real Books.json';

import convert from '@book/convert';

const Spirits = new BookGroup('Spirits', [
    new BookGroup('Real Books', convert(Real_Books.books))
])

export default Spirits;
