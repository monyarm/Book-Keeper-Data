
import Real_Books from './Real Books.json';

import convert from '@books/convert';

const ZO = new BookGroup('ZO', [
    new BookGroup('Episode Titles', convert(Real_Books.books))
]);

export default ZO;