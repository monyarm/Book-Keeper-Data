import BookGroup from '@/bookgroup';

import Anime from '@book/Anime';
import Book from '@book/Book';
import Cartoon from '@book/Cartoon';
import Comic from '@book/Comic';
import Movie from '@book/Movie';
import Real_Life from '@book/Real Life';
import Tabletop from '@book/Tabletop Game';

//#region TV
import Doctor_Who from './TV/Doctor Who.json';
//#endregion

import Video_Game from '@book/Video Game';
import Web from '@book/Web';

const BooksArray = [
    Anime,
    Book,
    Cartoon,
    Comic,
    Movie,
    Real_Life,
    Tabletop,
    new BookGroup('TV', [
        new BookGroup('Doctor Who', convert(Doctor_Who.books)),
        new BookGroup('Kamen Rider', [])
    ]),
    Video_Game,
    Web
];
export default BooksArray;
//# sourceMappingURL=index.js.map