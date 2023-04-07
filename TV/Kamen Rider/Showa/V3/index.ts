import BookGroup from '@/bookgroup';

import Episode_Titles from './Episode Titles.json';

import convert from '@book/convert';

const V3 = new BookGroup('V3', [
    new BookGroup('Episode Titles', convert(Episode_Titles.books))
]);

export default V3;
