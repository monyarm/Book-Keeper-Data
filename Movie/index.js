import Frankenstein from './Frankenstein.json';
import MCU from './MCU.json';

import convert from '@books/convert';

const Movie = new BookGroup('Movie', [
    new BookGroup('Frankenstein', convert(Frankenstein.books)),
    new BookGroup('MCU', convert(MCU.books)),
]);

export default Movie;