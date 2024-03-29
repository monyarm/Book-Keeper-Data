import BookGroup from '@/bookgroup';

import Oblivion from './Oblivion';
import Skyrim from './Skyrim';
import Daggerfall from './Daggerfall.json';

import convert from '@book/convert';


const Elder_Scrolls = new BookGroup('Elder Scrolls', [
    new BookGroup('Daggerfall', convert(Daggerfall.books)),
    Oblivion,
    Skyrim,
])

export default Elder_Scrolls;
