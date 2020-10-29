
import Looney_Tunes from './Looney Tunes.json';
import The_Simpsons from './The Simpsons.json';

import convert from '@books/convert';

const Cartoon = new BookGroup('Cartoon', [
    new BookGroup('Looney Tunes', convert(Looney_Tunes.books)),
    new BookGroup('The Simpsons', convert(The_Simpsons.books))
]);

export default Cartoon;