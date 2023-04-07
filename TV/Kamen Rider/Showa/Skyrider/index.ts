import BookGroup from '@/bookgroup';
import Episode_Titles from './Episode Titles.json';

import convert from '@book/convert';

const Skyrider = new BookGroup('Skyrider', [
    new BookGroup('Episode Titles', convert(Episode_Titles.books))
]);

export default Skyrider;
