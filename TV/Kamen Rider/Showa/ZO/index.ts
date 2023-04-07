import BookGroup from '@/bookgroup';
import Real_Books from './Real Books.json';

import convert from '@book/convert';

const ZO = new BookGroup('ZO', [
    new BookGroup('Episode Titles', convert(Real_Books.books))
]);

export default ZO;
