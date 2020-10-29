import A_Maids_Tale_esp from './A Maids Tale.esp.json';
import AfterTheRegatta_esp from './AfterTheRegatta.esp.json';
import BladeOfTheHaunted_esp from './BladeOfTheHaunted.esp.json';
import DarkBrotherhoodChronicles_esp from './DarkBrotherhoodChronicles.esp.json';
import Demonhunter_esp from './Demonhunter.esp.json';
import DibellasWatch_esm from './DibellasWatch.esm.json';
import ElsweyrAnequina_esp from './ElsweyrAnequina.esp.json';
import GoldenCrest_esp from './GoldenCrest.esp.json';
import GTAesgaard_esp from './GTAesgaard.esp.json';
import HeartOftheDead_esp from './HeartOftheDead.esp.json';
import In_The_Tower_Of_The_Crescent_Moon_esp from './In The Tower Of The Crescent Moon.esp.json';
import Ivellon_esp from './Ivellon.esp.json';
import Kragenirs_Death_Quest_esp from './Kragenir\'s Death Quest.esp.json';
import LordKain_Adash_World_esp from './LordKain_Adash_World.esp.json';
import Maeva_Scribonias_Bookshop_NO_BookPlacing_plus_Castas_Books_plus_Amalrics_Books_esp from './Maeva Scribonias Bookshop NO BookPlacing plus Castas Books plus Amalrics Books.esp.json';
import Malevolent_esp from './Malevolent.esp.json';
import Necromancy_Books_esp from './Necromancy Books.esp.json';
import QOTW_Season_Four_esp from './QOTW Season Four.esp.json';
import QOTW_Season_One_esp from './QOTW Season One.esp.json';
import QOTW_Season_Three_esp from './QOTW Season Three.esp.json';
import QOTW_Season_Two_esp from './QOTW Season Two.esp.json';
import Reapers_Esmeraldas_Desert_Manor_esp from './Reaper\'s Esmeralda\'s Desert Manor.esp.json';
import ReclaimSancreTor_esp from './ReclaimSancreTor.esp.json';
import Satin_And_Hot_Oil_2_esp from './Satin And Hot Oil 2.esp.json';
import Satin_And_Hot_Oil_esp from './Satin And Hot Oil.esp.json';
import Sundas_Morning_esp from './Sundas Morning.esp.json';
import The_Lost_Spires_esp from './The Lost Spires.esp.json';
import The_Orcs_Initiation_esp from './The Orcs Initiation.esp.json';
import The_Underking_esp from './The Underking.esp.json';
import The_Feast_esp from './The_Feast.esp.json';
import TheElderCouncil_esp from './TheElderCouncil.esp.json';
import TOTF_esp from './TOTF.esp.json';
import Windfall_esm from './Windfall.esm.json';

import convert from '@books/convert';

const Mods = new BookGroup('Mods', [
    new BookGroup('A Maids Tale.esp', convert(A_Maids_Tale_esp.books)),
    new BookGroup('AfterTheRegatta.esp', convert(AfterTheRegatta_esp.books)),
    new BookGroup('BladeOfTheHaunted.esp', convert(BladeOfTheHaunted_esp.books)),
    new BookGroup('DarkBrotherhoodChronicles.esp', convert(DarkBrotherhoodChronicles_esp.books)),
    new BookGroup('Demonhunter.esp', convert(Demonhunter_esp.books)),
    new BookGroup('DibellasWatch.esm', convert(DibellasWatch_esm.books)),
    new BookGroup('ElsweyrAnequina.esp', convert(ElsweyrAnequina_esp.books)),
    new BookGroup('GoldenCrest.esp', convert(GoldenCrest_esp.books)),
    new BookGroup('GTAesgaard.esp', convert(GTAesgaard_esp.books)),
    new BookGroup('HeartOftheDead.esp', convert(HeartOftheDead_esp.books)),
    new BookGroup('In The Tower Of The Crescent Moon.esp', convert(In_The_Tower_Of_The_Crescent_Moon_esp.books)),
    new BookGroup('Ivellon.esp', convert(Ivellon_esp.books)),
    new BookGroup('Kragenir\'s Death Quest.esp', convert(Kragenirs_Death_Quest_esp.books)),
    new BookGroup('LordKain_Adash_World.esp', convert(LordKain_Adash_World_esp.books)),
    new BookGroup('Maeva Scribonias Bookshop NO BookPlacing plus Castas Books plus Amalrics Books.esp', convert(Maeva_Scribonias_Bookshop_NO_BookPlacing_plus_Castas_Books_plus_Amalrics_Books_esp.books)),
    new BookGroup('Malevolent.esp', convert(Malevolent_esp.books)),
    new BookGroup('Necromancy Books.esp', convert(Necromancy_Books_esp.books)),
    new BookGroup('QOTW Season Four.esp', convert(QOTW_Season_Four_esp.books)),
    new BookGroup('QOTW Season One.esp', convert(QOTW_Season_One_esp.books)),
    new BookGroup('QOTW Season Three.esp', convert(QOTW_Season_Three_esp.books)),
    new BookGroup('QOTW Season Two.esp', convert(QOTW_Season_Two_esp.books)),
    new BookGroup('Reaper\'s Esmeralda\'s Desert Manor.esp', convert(Reapers_Esmeraldas_Desert_Manor_esp.books)),
    new BookGroup('ReclaimSancreTor.esp', convert(ReclaimSancreTor_esp.books)),
    new BookGroup('Satin And Hot Oil 2.esp', convert(Satin_And_Hot_Oil_2_esp.books)),
    new BookGroup('Satin And Hot Oil.esp', convert(Satin_And_Hot_Oil_esp.books)),
    new BookGroup('Sundas Morning.esp', convert(Sundas_Morning_esp.books)),
    new BookGroup('The Lost Spires.esp', convert(The_Lost_Spires_esp.books)),
    new BookGroup('The Orcs Initiation.esp', convert(The_Orcs_Initiation_esp.books)),
    new BookGroup('The Underking.esp', convert(The_Underking_esp.books)),
    new BookGroup('The_Feast.esp', convert(The_Feast_esp.books)),
    new BookGroup('TheElderCouncil.esp', convert(TheElderCouncil_esp.books)),
    new BookGroup('TOTF.esp', convert(TOTF_esp.books)),
    new BookGroup('Windfall.esm', convert(Windfall_esm.books)),
]);

export default Mods;