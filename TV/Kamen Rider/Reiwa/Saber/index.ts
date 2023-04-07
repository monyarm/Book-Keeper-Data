import BookGroup from '@/bookgroup';
import In_Universe from './In Universe.json';

import convert from '@book/convert';

const Saber = new BookGroup('Saber', [
    new BookGroup('In Universe', convert(In_Universe.books))
]);

export default Saber;
