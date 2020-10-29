import BookGroup from '@/bookgroup';
import convert from '@books/convert';

import Real_Books from './Real Books.json';
//import In_Universe from './In Universe.json';
import Episode_Titles from './Episode Titles.json';

const Bleach = new BookGroup(
    'Bleach', [
        new BookGroup(
            'Episode Titles', convert(Episode_Titles.books)
        ),
        //new BookGroup(
        //    'In Universe', convert(Bleach_In_Universe.books)
        //),
        new BookGroup(
            'Real Books', convert(Real_Books.books)
        )
    ]
);

export default Bleach;