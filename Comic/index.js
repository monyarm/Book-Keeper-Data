
import Marvel from './Marvel.json';

import convert from '@books/convert';

const Comic = new BookGroup('Comic', [
    new BookGroup('Marvel', convert(Marvel.books))
]);

export default Comic;