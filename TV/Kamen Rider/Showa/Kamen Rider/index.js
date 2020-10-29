
import Episode_Titles from './Episode Titles.json';

import convert from '@books/convert';

const Kamen_Rider = new BookGroup('Kamen Rider', [
    new BookGroup('Episode Titles', convert(Episode_Titles.books))
]);

export default Kamen_Rider;