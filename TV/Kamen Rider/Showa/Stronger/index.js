
import Episode_Titles from './Episode Titles.json';

import convert from '@books/convert';

const Stronger = new BookGroup('Stronger', [
    new BookGroup('Episode Titles', convert(Episode_Titles.books))
]);

export default Stronger;