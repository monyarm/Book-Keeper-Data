import Base_Game from './Oblivion.json';
import Shivering_Isles from './Shivering Isles.json';
import Mods from './Mods';

import convert from '@books/convert';

const Oblivion = new BookGroup('Oblivion', [
    new BookGroup('Oblivion', convert(Base_Game.books)),
    new BookGroup('Shivering Isles', convert(Shivering_Isles.books)),
    Mods
]);

export default Oblivion;