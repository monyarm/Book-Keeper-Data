import BookGroup from '@/bookgroup';
import Episode_Titles from './Episode Titles.json';

import convert from '@book/convert';

const Stronger = new BookGroup('Stronger', [
    new BookGroup('Episode Titles', convert(Episode_Titles.books))
]);

export default Stronger;
