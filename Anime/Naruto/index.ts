import BookGroup from '@/bookgroup';
import convert from '@book/convert';

import Real_Books from './Real Books.json';
import In_Universe from './In Universe.json';
import Episode_Titles from './Episode Titles.json';

const Naruto = new BookGroup(
    'Naruto', [
        new BookGroup(
            'Episode Titles', convert(Episode_Titles.books)
        ),
        new BookGroup(
            'In Universe', convert(In_Universe.books)
        ),
        new BookGroup(
            'Real Books', convert(Real_Books.books)
        )
    ]
);

export default Naruto;
