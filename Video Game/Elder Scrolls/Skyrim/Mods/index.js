import Bloodworm_esp from './Bloodworm.esp.json';
import Clockwork_esp from './Clockwork.esp.json';
import Dwarfsphere_esp from './Dwarfsphere.esp.json';
import Enderal_Forgotten_Stories_esm from './Enderal - Forgotten Stories.esm.json';
import ForgottenCity_esp from './ForgottenCity.esp.json';
import Gallowmere_esp from './Gallowmere.esp.json';
import Gray_Fox_Cowl_esm from './Gray Fox Cowl.esm.json';
import INFERNAL_FLAME_esp from './INFERNAL FLAME.esp.json';
import MoonAndStar_MAS_esp from './MoonAndStar_MAS.esp.json';
import moonpath_esp from './moonpath.esp.json';
import RodryksBooks_esp from './RodryksBooks.esp.json';
import SwordOfSigdan_esp from './SwordOfSigdan.esp.json';
import The_Brotherhood_of_Old_esp from './The Brotherhood of Old.esp.json';
import TrueHel_esp from './TrueHel.esp.json';
import Undeath_esp from './Undeath.esp.json';
import WheelsOfLull_esp from './WheelsOfLull.esp.json';
import arnima_esm from './arnima.esm.json';
import bhabhilon_esp from './bhabhilon.esp.json';
import Black_Marsh_North_esp from './Black Marsh North.esp.json';
import Black_Marsh_esm from './Black Marsh.esm.json';
import Darkend_esp from './Darkend.esp.json';
import Darkglade_esp from './Darkglade.esp.json';
import Falskaar_esm from './Falskaar.esm.json';
import HammetDungeons_esm from './HammetDungeons.esm.json';
import maslea_esm from './maslea.esm.json';
import Phenderix_Magic_World_esp from './Phenderix Magic World.esp.json';
import Phoe_esm from './Phoe.esm.json';
import The_Haven_From_The_Cold_And_Dark_esp from './The Haven From The Cold And Dark.esp.json';
import TheBawbsShire_esp from './TheBawbsShire.esp.json';

import convert from '@books/convert';

const Mods = new BookGroup('Mods', [
    new BookGroup('Bloodworm.esp', convert(Bloodworm_esp.books)),
    new BookGroup('Clockwork.esp', convert(Clockwork_esp.books)),
    new BookGroup('Dwarfsphere.esp', convert(Dwarfsphere_esp.books)),
    new BookGroup('Enderal - Forgotten Stories.esm', convert(Enderal_Forgotten_Stories_esm.books)),
    new BookGroup('ForgottenCity.esp', convert(ForgottenCity_esp.books)),
    new BookGroup('Gallowmere.esp', convert(Gallowmere_esp.books)),
    new BookGroup('Gray Fox Cowl.esm', convert(Gray_Fox_Cowl_esm.books)),
    new BookGroup('INFERNAL FLAME.esp', convert(INFERNAL_FLAME_esp.books)),
    new BookGroup('MoonAndStar_MAS.esp', convert(MoonAndStar_MAS_esp.books)),
    new BookGroup('moonpath.esp', convert(moonpath_esp.books)),
    new BookGroup('RodryksBooks.esp', convert(RodryksBooks_esp.books)),
    new BookGroup('SwordOfSigdan.esp', convert(SwordOfSigdan_esp.books)),
    new BookGroup('The Brotherhood of Old.esp', convert(The_Brotherhood_of_Old_esp.books)),
    new BookGroup('TrueHel.esp', convert(TrueHel_esp.books)),
    new BookGroup('Undeath.esp', convert(Undeath_esp.books)),
    new BookGroup('WheelsOfLull.esp', convert(WheelsOfLull_esp.books)),
    new BookGroup('arnima.esm', convert(arnima_esm.books)),
    new BookGroup('bhabhilon.esp', convert(bhabhilon_esp.books)),
    new BookGroup('Black Marsh North.esp', convert(Black_Marsh_North_esp.books)),
    new BookGroup('Black Marsh.esm', convert(Black_Marsh_esm.books)),
    new BookGroup('Darkend.esp', convert(Darkend_esp.books)),
    new BookGroup('Darkglade.esp', convert(Darkglade_esp.books)),
    new BookGroup('Falskaar.esm', convert(Falskaar_esm.books)),
    new BookGroup('HammetDungeons.esm', convert(HammetDungeons_esm.books)),
    new BookGroup('maslea.esm', convert(maslea_esm.books)),
    new BookGroup('Phenderix Magic World.esp', convert(Phenderix_Magic_World_esp.books)),
    new BookGroup('Phoe.esm', convert(Phoe_esm.books)),
    new BookGroup('The Haven From The Cold And Dark.esp', convert(The_Haven_From_The_Cold_And_Dark_esp.books)),
    new BookGroup('TheBawbsShire.esp', convert(TheBawbsShire_esp.books)),
]);

export default Mods;