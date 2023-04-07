import BookGroup from '@/bookgroup';

import convert from '@book/convert';

import Anime from '@book/Anime';
import Book from '@book/Book';
import Cartoon from '@book/Cartoon';
import Comic from '@book/Comic';
import Movie from '@book/Movie';
import Real_Life from '@book/Real Life';
import Tabletop from '@book/Tabletop Game';
import TV from  '@book/TV';

import Video_Game from '@book/Video Game';
import Web from '@book/Web';

const Books = new BookGroup('All', [
    Anime,
    Book,
    Cartoon,
    Comic,
    Movie,
    Real_Life,
    Tabletop,
    TV,
    Video_Game,
    Web
]);
export default Books;
//# sourceMappingURL=index.js.map
