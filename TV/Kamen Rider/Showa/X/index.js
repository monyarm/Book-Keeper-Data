
import Episode_Titles from './Episode Titles.json';

import convert from '@books/convert';

const X = new BookGroup('X', [
    new BookGroup('Episode Titles', convert(Episode_Titles.books))
]);

export default X;