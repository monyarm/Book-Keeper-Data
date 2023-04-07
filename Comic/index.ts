import BookGroup from '@/bookgroup';

import Marvel from './Marvel.json';

import convert from '@book/convert';

const Comic = new BookGroup('Comic', [
    new BookGroup('Marvel', convert(Marvel.books))
]);

export default Comic;
