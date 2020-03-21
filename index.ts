import Book from '../src/book';
import BookGroup from '@/bookgroup';

//#region Books
import Harry_Potter from './Book/Harry Potter.json';
import Lovecraft from './Book/Lovecraft.json';
import Tolkien from './Book/Lovecraft.json';
//#endregion

//#region Cartoons
import Looney_Tunes from './Cartoon/Looney Tunes.json';
import The_Simpsons from './Cartoon/The Simpsons.json';
//#endregion

//#region Comics
import Marvel from './Comic/Marvel.json';
//#endregion

//#region Movies
import Frankenstein from './Movie/Frankenstein.json';
//#endregion

//#region Real Life
import Agatha_Christie from './Real Life/Agatha Christie.json';
import Arthur_Conan_Doyle from './Real Life/Arthur Conan Doyle.json';
import Edgar_Allan_Poe from './Real Life/Edgar Allan Poe.json';
import Jules_Gabriel_Verne from './Real Life/Jules Gabriel Verne.json';
import Mary_Shelley from './Real Life/Mary Shelley.json';
import Maurice_Leblanc from './Real Life/Maurice Leblanc.json';
import Neil_Gaiman from './Real Life/Neil Gaiman.json';
import Terry_Pratchett from './Real Life/Terry Pratchett.json';
//#endregion

//#region Tabletop Games
import Critical_Role from './Tabletop Game/Critical Role.json';
import Forgotten_Realms from './Tabletop Game/Forgotten Realms.json';
import High_Rollers from './Tabletop Game/High Rollers D&D.json';
import MTG from './Tabletop Game/MTG.json';
//#endregion

//#region TV
import Doctor_Who from './TV/Doctor Who.json';
import Kamen_Rider from './TV/Kamen Rider.json';
//#endregion

//#region Video Games

//#region Elder Scrolls

//#region  Oblivion
import Oblivion from './Video Game/Elder Scrolls/Oblivion/Oblivion.json';
import Shivering_Isles from './Video Game/Elder Scrolls/Oblivion/Shivering Isles.json';
//#region   Mods
import A_Maids_Tale_esp from './Video Game/Elder Scrolls/Oblivion/Mods/A Maids Tale.esp.json';
import AfterTheRegatta_esp from './Video Game/Elder Scrolls/Oblivion/Mods/AfterTheRegatta.esp.json';
import BladeOfTheHaunted_esp from './Video Game/Elder Scrolls/Oblivion/Mods/BladeOfTheHaunted.esp.json';
import DarkBrotherhoodChronicles_esp from './Video Game/Elder Scrolls/Oblivion/Mods/DarkBrotherhoodChronicles.esp.json';
import Demonhunter_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Demonhunter.esp.json';
import DibellasWatch_esm from './Video Game/Elder Scrolls/Oblivion/Mods/DibellasWatch.esm.json'
import ElsweyrAnequina_esp from './Video Game/Elder Scrolls/Oblivion/Mods/ElsweyrAnequina.esp.json';
import GoldenCrest_esp from './Video Game/Elder Scrolls/Oblivion/Mods/GoldenCrest.esp.json';
import GTAesgaard_esp from './Video Game/Elder Scrolls/Oblivion/Mods/GTAesgaard.esp.json';
import HeartOftheDead_esp from './Video Game/Elder Scrolls/Oblivion/Mods/HeartOftheDead.esp.json';
import In_The_Tower_Of_The_Crescent_Moon_esp from './Video Game/Elder Scrolls/Oblivion/Mods/In The Tower Of The Crescent Moon.esp.json';
import Ivellon_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Ivellon.esp.json';
import Kragenirs_Death_Quest_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Kragenir\'s Death Quest.esp.json';
import LordKain_Adash_World_esp from './Video Game/Elder Scrolls/Oblivion/Mods/LordKain_Adash_World.esp.json';
import Maeva_Scribonias_Bookshop_NO_BookPlacing_plus_Castas_Books_plus_Amalrics_Books_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Maeva Scribonias Bookshop NO BookPlacing plus Castas Books plus Amalrics Books.esp.json';
import Malevolent_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Malevolent.esp.json';
import Necromancy_Books_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Necromancy Books.esp.json';
import QOTW_Season_Four_esp from './Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season Four.esp.json';
import QOTW_Season_One_esp from './Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season One.esp.json';
import QOTW_Season_Three_esp from './Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season Three.esp.json';
import QOTW_Season_Two_esp from './Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season Two.esp.json';
import Reapers_Esmeraldas_Desert_Manor_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Reaper\'s Esmeralda\'s Desert Manor.esp.json';
import ReclaimSancreTor_esp from './Video Game/Elder Scrolls/Oblivion/Mods/ReclaimSancreTor.esp.json';
import Satin_And_Hot_Oil_2_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Satin And Hot Oil 2.esp.json';
import Satin_And_Hot_Oil_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Satin And Hot Oil.esp.json';
import Sundas_Morning_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Sundas Morning.esp.json';
import The_Lost_Spires_esp from './Video Game/Elder Scrolls/Oblivion/Mods/The Lost Spires.esp.json';
import The_Orcs_Initiation_esp from './Video Game/Elder Scrolls/Oblivion/Mods/The Orcs Initiation.esp.json';
import The_Underking_esp from './Video Game/Elder Scrolls/Oblivion/Mods/The Underking.esp.json';
import The_Feast_esp from './Video Game/Elder Scrolls/Oblivion/Mods/The_Feast.esp.json';
import TheElderCouncil_esp from './Video Game/Elder Scrolls/Oblivion/Mods/TheElderCouncil.esp.json';
import TOTF_esp from './Video Game/Elder Scrolls/Oblivion/Mods/TOTF.esp.json';
import Windfall_esm from './Video Game/Elder Scrolls/Oblivion/Mods/Windfall.esm.json';
//#endregion
//#endregion

//#region   Skyrim
import Skyrim from './Video Game/Elder Scrolls/Skyrim/Skyrim.json';
import Dragonborn from './Video Game/Elder Scrolls/Skyrim/Dragonborn.json';
//#region   Mods
import Bloodworm_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Bloodworm.esp.json';
import Clockwork_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Clockwork.esp.json';
import Dwarfsphere_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Dwarfsphere.esp.json';
import Enderal_Forgotten_Stories_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Enderal - Forgotten Stories.esm.json';
import ForgottenCity_esp from './Video Game/Elder Scrolls/Skyrim/Mods/ForgottenCity.esp.json';
import Gallowmere_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Gallowmere.esp.json';
import Gray_Fox_Cowl_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Gray Fox Cowl.esm.json';
import INFERNAL_FLAME_esp from './Video Game/Elder Scrolls/Skyrim/Mods/INFERNAL FLAME.esp.json';
import MoonAndStar_MAS_esp from './Video Game/Elder Scrolls/Skyrim/Mods/MoonAndStar_MAS.esp.json';
import moonpath_esp from './Video Game/Elder Scrolls/Skyrim/Mods/moonpath.esp.json';
import RodryksBooks_esp from './Video Game/Elder Scrolls/Skyrim/Mods/RodryksBooks.esp.json';
import SwordOfSigdan_esp from './Video Game/Elder Scrolls/Skyrim/Mods/SwordOfSigdan.esp.json';
import The_Brotherhood_of_Old_esp from './Video Game/Elder Scrolls/Skyrim/Mods/The Brotherhood of Old.esp.json';
import TrueHel_esp from './Video Game/Elder Scrolls/Skyrim/Mods/TrueHel.esp.json';
import Undeath_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Undeath.esp.json';
import WheelsOfLull_esp from './Video Game/Elder Scrolls/Skyrim/Mods/WheelsOfLull.esp.json';
import arnima_esm from './Video Game/Elder Scrolls/Skyrim/Mods/arnima.esm.json';
import bhabhilon_esp from './Video Game/Elder Scrolls/Skyrim/Mods/bhabhilon.esp.json';
import Black_Marsh_North_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Black Marsh North.esp.json';
import Black_Marsh_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Black Marsh.esm.json';
import Darkend_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Darkend.esp.json';
import Darkglade_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Darkglade.esp.json';
import Falskaar_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Falskaar.esm.json';
import HammetDungeons_esm from './Video Game/Elder Scrolls/Skyrim/Mods/HammetDungeons.esm.json';
import maslea_esm from './Video Game/Elder Scrolls/Skyrim/Mods/maslea.esm.json';
import Phenderix_Magic_World_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Phenderix Magic World.esp.json';
import Phoe_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Phoe.esm.json';
import The_Haven_From_The_Cold_And_Dark_esp from './Video Game/Elder Scrolls/Skyrim/Mods/The Haven From The Cold And Dark.esp.json';
import TheBawbsShire_esp from './Video Game/Elder Scrolls/Skyrim/Mods/TheBawbsShire.esp.json';
//#endregion

//#endregion
//#region   Daggerfall
import Daggerfall from './Video Game/Elder Scrolls/Daggerfall.json';
//#endregion
//#endregion
import Castlevania from './Video Game/Castlevania.json';
import Fallout from './Video Game/Fallout.json';
import Minecraft from './Video Game/Minecraft.json';
import RuneScape from './Video Game/RuneScape.json';
//#endregion

//#region Web
import RWBY from './Web/RWBY.json';
import SCP from './Web/SCP.json';
//#endregion

function convert(input: Array<any>) {
    let tempBooks: Book[] = [];
    input.forEach(
        (x: any) => {
            tempBooks.push(new Book(x.title, x.category, x.translatedTitle, x.language, x.sources, x.description, x.author, x.selected));
        }
    )
    return tempBooks;
}

const BooksArray: BookGroup[] = [
    new BookGroup('Book', [
        new BookGroup(
            'Harry Potter', convert(Harry_Potter.books)
        ),
        new BookGroup(
            'Lovecraft', convert(Lovecraft.books)
        ),
        new BookGroup(
            'Tolkien', convert(Tolkien.books)
        )
    ]
    ),
    new BookGroup('Cartoon', [
        new BookGroup(
            'Looney Tunes', convert(Looney_Tunes.books)
        ),
        new BookGroup(
            'The Simpsons', convert(The_Simpsons.books)
        )
    ]
    ),
    new BookGroup('Comic', [
        new BookGroup(
            'Marvel', convert(Marvel.books)
        )
    ]
    ),
    new BookGroup('Movie', [
        new BookGroup(
            'Frankenstein', convert(Frankenstein.books)
        )
    ]
    ),
    new BookGroup('Real Life', [
        new BookGroup(
            'Agatha Christie', convert(Agatha_Christie.books)
        ),
        new BookGroup(
            'Arthur Conan Doyle', convert(Arthur_Conan_Doyle.books)
        ),
        new BookGroup(
            'Edgar Allan Poe', convert(Edgar_Allan_Poe.books)
        ),
        new BookGroup(
            'Jules Gabriel Verne', convert(Jules_Gabriel_Verne.books)
        ),
        new BookGroup(
            'Mary Shelley', convert(Mary_Shelley.books)
        ),
        new BookGroup(
            'Maurice Leblanc', convert(Maurice_Leblanc.books)
        ),
        new BookGroup(
            'Neil Gaiman', convert(Neil_Gaiman.books)
        ),
        new BookGroup(
            'Terry Pratchett', convert(Terry_Pratchett.books)
        )
    ]
    ),
    new BookGroup('Tabletop Game', [
        new BookGroup(
            'Critical Role', convert(Critical_Role.books)
        ), new BookGroup(
            'Forgotten Realms', convert(Forgotten_Realms.books)
        ), new BookGroup(
            'High Rollers D&D', convert(High_Rollers.books)
        ), new BookGroup(
            'MTG', convert(MTG.books)
        )
    ]
    ),
    new BookGroup('TV', [
        new BookGroup(
            'Doctor Who', convert(Doctor_Who.books)
        ),
        new BookGroup(
            'Kamen Rider', convert(Kamen_Rider.books)
        )
    ]
    ),
    new BookGroup('Video Game', [
        new BookGroup('Elder Scrolls', [
            new BookGroup(
                'Daggerfall', convert(Daggerfall.books)
            ),
            new BookGroup(
                'Oblivion',

                [
                    new BookGroup(
                        'Oblivion', convert(Oblivion.books)
                    ),
                    new BookGroup(
                        'Shivering Isles', convert(Shivering_Isles.books)
                    ),
                    new BookGroup(
                        'Mods',
                        [
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
                        ]
                    )
                ]
            ),
            new BookGroup(
                'Skyrim',

                [
                    new BookGroup(
                        'Skyrim', convert(Skyrim.books)
                    ),
                    new BookGroup(
                        'Dragonborn', convert(Dragonborn.books)
                    ),
                    new BookGroup(
                        'Mods',
                        [
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
                        ]
                    )
                ]
            ),
        ]
        ),
        new BookGroup(
            'Castlevania', convert(Castlevania.books)
        ), new BookGroup(
            'Fallout', convert(Fallout.books)
        ), new BookGroup(
            'Minecraft', convert(Minecraft.books)
        ), new BookGroup(
            'Runescape', convert(RuneScape.books)
        ),
    ]
    ),
    new BookGroup('Web', [
        new BookGroup(
            'RWBY', convert(RWBY.books)
        ),
        new BookGroup(
            'SCP', convert(SCP.books)
        )
    ]
    )
];

export default BooksArray;

