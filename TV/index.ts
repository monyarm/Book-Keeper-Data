import BookGroup from '@/bookgroup';

import Doctor_Who from './Doctor Who.json';
import Kamen_Rider from './Kamen Rider';

import convert from '@book/convert'

const TV = new BookGroup('TV', [
    new BookGroup('Doctor Who', convert(Doctor_Who.books)),
    Kamen_Rider
])

export default TV;
