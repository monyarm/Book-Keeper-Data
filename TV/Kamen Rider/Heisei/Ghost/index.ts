import BookGroup from '@/bookgroup';
// import Episode_Titles from './Episode Titles.json';
import Real_Books from './Real Books.json';

import convert from '@book/convert';

const Ghost = new BookGroup('Ghost', [
    // new BookGroup('Episode Titles', convert(Episode_Titles.books)),
    new BookGroup('Episode Titles', convert(Real_Books.books))
]);

export default Ghost;
