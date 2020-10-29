
import Episode_Titles from './Episode Titles.json';
import Real_Books from './Real Books.json';

import convert from '@books/convert';

const Black = new BookGroup('Black', [
    new BookGroup('Episode Titles', convert(Episode_Titles.books))
    new BookGroup('Episode Titles', convert(Real_Books.books))
]);

export default Black;