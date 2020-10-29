
import Critical_Role from './Critical Role.json';
import Forgotten_Realms from './Forgotten Realms.json';
import High_Rollers from './High Rollers D&D.json';
import MTG from './MTG.json';

import convert from '@book/convert';

const Tabletop = new BookGroup('Tabletop Game', [
    new BookGroup('Critical Role', convert(Critical_Role.books)),
    new BookGroup('Forgotten Realms', convert(Forgotten_Realms.books)),
    new BookGroup('High Rollers D&D', convert(High_Rollers.books)),
    new BookGroup('MTG', convert(MTG.books))
])

export default Tabletop;