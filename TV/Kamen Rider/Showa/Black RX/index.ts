import BookGroup from '@/bookgroup';
import Episode_Titles from './Episode Titles.json';


import convert from '@book/convert';

const Black_RX = new BookGroup('Black RX', [
    new BookGroup('Episode Titles', convert(Episode_Titles.books))
]);

export default Black_RX;
