import Agatha_Christie from './Agatha Christie.json';
import Arthur_Conan_Doyle from './Arthur Conan Doyle.json';
import Edgar_Allan_Poe from './Edgar Allan Poe.json';
import Jules_Gabriel_Verne from './Jules Gabriel Verne.json';
import Mary_Shelley from './Mary Shelley.json';
import Maurice_Leblanc from './Maurice Leblanc.json';
import Neil_Gaiman from './Neil Gaiman.json';
import Terry_Pratchett from './Terry Pratchett.json';

import convert from '@books/convert';

const Real_Life = new BookGroup('Real Life', [
    new BookGroup('Agatha Christie', convert(Agatha_Christie.books)),
    new BookGroup('Arthur Conan Doyle', convert(Arthur_Conan_Doyle.books)),
    new BookGroup('Edgar Allan Poe', convert(Edgar_Allan_Poe.books)),
    new BookGroup('Jules Gabriel Verne', convert(Jules_Gabriel_Verne.books)),
    new BookGroup('Mary Shelley', convert(Mary_Shelley.books)),
    new BookGroup('Maurice Leblanc', convert(Maurice_Leblanc.books)),
    new BookGroup('Neil Gaiman', convert(Neil_Gaiman.books)),
    new BookGroup('Terry Pratchett', convert(Terry_Pratchett.books))
]);

export default Real_Life;