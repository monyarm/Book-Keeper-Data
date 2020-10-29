import Base_Game from './Skyrim.json';
import Dragonborn from './Dragonborn.json';
import Mods from './Mods';

import convert from '@books/convert';

const Skyrim = new BookGroup('Skyrim', [
    new BookGroup('Skyrim', convert(Base_Game.books)),
    new BookGroup('Dragonborn', convert(Dragonborn.books)),
    Mods
]);

export default Skyrim;