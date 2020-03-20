import Book from '../src/book';
import BookGroup from '@/bookgroup';

//#region Books
import * as Harry_Potter from './Book/Harry Potter.json';
import * as Lovecraft from './Book/Lovecraft.json';
import * as Tolkien from './Book/Lovecraft.json';
//#endregion

//#region Cartoons
import * as Looney_Tunes from './Cartoon/Looney Tunes.json';
import * as The_Simpsons from './Cartoon/The Simpsons.json';
//#endregion

//#region Comics
import * as Marvel from './Comic/Marvel.json';
//#endregion

//#region Movies
import * as Frankenstein from './Movie/Frankenstein.json';
//#endregion

//#region Real Life
import * as Agatha_Christie from './Real Life/Agatha Christie.json';
import * as Arthur_Conan_Doyle from './Real Life/Arthur Conan Doyle.json';
import * as Edgar_Allan_Poe from './Real Life/Edgar Allan Poe.json';
import * as Jules_Gabriel_Verne from './Real Life/Jules Gabriel Verne.json';
import * as Mary_Shelley from './Real Life/Mary Shelley.json';
import * as Maurice_Leblanc from './Real Life/Maurice Leblanc.json';
import * as Neil_Gaiman from './Real Life/Neil Gaiman.json';
import * as Terry_Pratchett from './Real Life/Terry Pratchett.json';
//#endregion

//#region Tabletop Games
import * as Critical_Role from './Tabletop Game/Critical Role.json';
import * as Forgotten_Realms from './Tabletop Game/Forgotten Realms.json';
import * as High_Rollers from './Tabletop Game/High Rollers D&D.json';
import * as MTG from './Tabletop Game/MTG.json';
//#endregion

//#region TV
import * as Doctor_Who from './TV/Doctor Who.json';
import * as Kamen_Rider from './TV/Kamen Rider.json';
//#endregion

//#region Video Games

//#region Elder Scrolls

//#region  Oblivion
import * as Oblivion from './Video Game/Elder Scrolls/Oblivion/Oblivion.json';
import * as Shivering_Isles from './Video Game/Elder Scrolls/Oblivion/Shivering Isles.json';
//#region   Mods
import * as A_Maids_Tale_esp from './Video Game/Elder Scrolls/Oblivion/Mods/A Maids Tale.esp.json';
import * as AfterTheRegatta_esp from './Video Game/Elder Scrolls/Oblivion/Mods/AfterTheRegatta.esp.json';
import * as BladeOfTheHaunted_esp from './Video Game/Elder Scrolls/Oblivion/Mods/BladeOfTheHaunted.esp.json';
import * as DarkBrotherhoodChronicles_esp from './Video Game/Elder Scrolls/Oblivion/Mods/DarkBrotherhoodChronicles.esp.json';
import * as Demonhunter_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Demonhunter.esp.json';
import * as DibellasWatch_esm from './Video Game/Elder Scrolls/Oblivion/Mods/DibellasWatch.esm.json'
import * as ElsweyrAnequina_esp from './Video Game/Elder Scrolls/Oblivion/Mods/ElsweyrAnequina.esp.json';
import * as GoldenCrest_esp from './Video Game/Elder Scrolls/Oblivion/Mods/GoldenCrest.esp.json';
import * as GTAesgaard_esp from './Video Game/Elder Scrolls/Oblivion/Mods/GTAesgaard.esp.json';
import * as HeartOftheDead_esp from './Video Game/Elder Scrolls/Oblivion/Mods/HeartOftheDead.esp.json';
import * as In_The_Tower_Of_The_Crescent_Moon_esp from './Video Game/Elder Scrolls/Oblivion/Mods/In The Tower Of The Crescent Moon.esp.json';
import * as Ivellon_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Ivellon.esp.json';
import * as Kragenirs_Death_Quest_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Kragenir\'s Death Quest.esp.json';
import * as LordKain_Adash_World_esp from './Video Game/Elder Scrolls/Oblivion/Mods/LordKain_Adash_World.esp.json';
import * as Maeva_Scribonias_Bookshop_NO_BookPlacing_plus_Castas_Books_plus_Amalrics_Books_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Maeva Scribonias Bookshop NO BookPlacing plus Castas Books plus Amalrics Books.esp.json';
import * as Malevolent_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Malevolent.esp.json';
import * as Necromancy_Books_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Necromancy Books.esp.json';
import * as QOTW_Season_Four_esp from './Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season Four.esp.json';
import * as QOTW_Season_One_esp from './Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season One.esp.json';
import * as QOTW_Season_Three_esp from './Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season Three.esp.json';
import * as QOTW_Season_Two_esp from './Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season Two.esp.json';
import * as Reapers_Esmeraldas_Desert_Manor_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Reaper\'s Esmeralda\'s Desert Manor.esp.json';
import * as ReclaimSancreTor_esp from './Video Game/Elder Scrolls/Oblivion/Mods/ReclaimSancreTor.esp.json';
import * as Satin_And_Hot_Oil_2_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Satin And Hot Oil 2.esp.json';
import * as Satin_And_Hot_Oil_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Satin And Hot Oil.esp.json';
import * as Sundas_Morning_esp from './Video Game/Elder Scrolls/Oblivion/Mods/Sundas Morning.esp.json';
import * as The_Lost_Spires_esp from './Video Game/Elder Scrolls/Oblivion/Mods/The Lost Spires.esp.json';
import * as The_Orcs_Initiation_esp from './Video Game/Elder Scrolls/Oblivion/Mods/The Orcs Initiation.esp.json';
import * as The_Underking_esp from './Video Game/Elder Scrolls/Oblivion/Mods/The Underking.esp.json';
import * as The_Feast_esp from './Video Game/Elder Scrolls/Oblivion/Mods/The_Feast.esp.json';
import * as TheElderCouncil_esp from './Video Game/Elder Scrolls/Oblivion/Mods/TheElderCouncil.esp.json';
import * as TOTF_esp from './Video Game/Elder Scrolls/Oblivion/Mods/TOTF.esp.json';
import * as Windfall_esm from './Video Game/Elder Scrolls/Oblivion/Mods/Windfall.esm.json';
//#endregion
//#endregion

//#region   Skyrim
import * as Skyrim from './Video Game/Elder Scrolls/Skyrim/Skyrim.json';
import * as Dragonborn from './Video Game/Elder Scrolls/Skyrim/Dragonborn.json';
//#region   Mods
import * as Bloodworm_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Bloodworm.esp.json';
import * as Clockwork_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Clockwork.esp.json';
import * as Dwarfsphere_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Dwarfsphere.esp.json';
import * as Enderal_Forgotten_Stories_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Enderal - Forgotten Stories.esm.json';
import * as ForgottenCity_esp from './Video Game/Elder Scrolls/Skyrim/Mods/ForgottenCity.esp.json';
import * as Gallowmere_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Gallowmere.esp.json';
import * as Gray_Fox_Cowl_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Gray Fox Cowl.esm.json';
import * as INFERNAL_FLAME_esp from './Video Game/Elder Scrolls/Skyrim/Mods/INFERNAL FLAME.esp.json';
import * as MoonAndStar_MAS_esp from './Video Game/Elder Scrolls/Skyrim/Mods/MoonAndStar_MAS.esp.json';
import * as moonpath_esp from './Video Game/Elder Scrolls/Skyrim/Mods/moonpath.esp.json';
import * as RodryksBooks_esp from './Video Game/Elder Scrolls/Skyrim/Mods/RodryksBooks.esp.json';
import * as SwordOfSigdan_esp from './Video Game/Elder Scrolls/Skyrim/Mods/SwordOfSigdan.esp.json';
import * as The_Brotherhood_of_Old_esp from './Video Game/Elder Scrolls/Skyrim/Mods/The Brotherhood of Old.esp.json';
import * as TrueHel_esp from './Video Game/Elder Scrolls/Skyrim/Mods/TrueHel.esp.json';
import * as Undeath_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Undeath.esp.json';
import * as WheelsOfLull_esp from './Video Game/Elder Scrolls/Skyrim/Mods/WheelsOfLull.esp.json';
import * as arnima_esm from './Video Game/Elder Scrolls/Skyrim/Mods/arnima.esm.json';
import * as bhabhilon_esp from './Video Game/Elder Scrolls/Skyrim/Mods/bhabhilon.esp.json';
import * as Black_Marsh_North_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Black Marsh North.esp.json';
import * as Black_Marsh_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Black Marsh.esm.json';
import * as Darkend_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Darkend.esp.json';
import * as Darkglade_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Darkglade.esp.json';
import * as Falskaar_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Falskaar.esm.json';
import * as HammetDungeons_esm from './Video Game/Elder Scrolls/Skyrim/Mods/HammetDungeons.esm.json';
import * as maslea_esm from './Video Game/Elder Scrolls/Skyrim/Mods/maslea.esm.json';
import * as Phenderix_Magic_World_esp from './Video Game/Elder Scrolls/Skyrim/Mods/Phenderix Magic World.esp.json';
import * as Phoe_esm from './Video Game/Elder Scrolls/Skyrim/Mods/Phoe.esm.json';
import * as The_Haven_From_The_Cold_And_Dark_esp from './Video Game/Elder Scrolls/Skyrim/Mods/The Haven From The Cold And Dark.esp.json';
import * as TheBawbsShire_esp from './Video Game/Elder Scrolls/Skyrim/Mods/TheBawbsShire.esp.json';
//#endregion

//#endregion
//#region   Daggerfall
import * as Daggerfall from './Video Game/Elder Scrolls/Daggerfall.json';
//#endregion
//#endregion
import * as Castlevania from './Video Game/Castlevania.json';
import * as Fallout from './Video Game/Fallout.json';
import * as Minecraft from './Video Game/Minecraft.json';
import * as RuneScape from './Video Game/RuneScape.json';
//#endregion

//#region Web
import * as RWBY from './Web/RWBY.json';
import * as SCP from './Web/SCP.json';
//#endregion

const BooksArray: BookGroup[] = [
    new BookGroup('Book', [
        new BookGroup(
            'Harry Potter', Harry_Potter.books as Book[]
        ),
        new BookGroup(
            'Lovecraft', Lovecraft.books as Book[]
        ),
        new BookGroup(
            'Tolkien', Tolkien.books as Book[]
        )
    ]
    ),
    new BookGroup('Cartoon', [
        new BookGroup(
            'Looney Tunes', Looney_Tunes.books as Book[]
        ),
        new BookGroup(
            'The Simpsons', The_Simpsons.books as Book[]
        )
    ]
    ),
    new BookGroup('Comic', [
        new BookGroup(
            'Marvel', Marvel.books as Book[]
        )
    ]
    ),
    new BookGroup('Movie', [
        new BookGroup(
            'Frankenstein', Frankenstein.books as Book[]
        )
    ]
    ),
    new BookGroup('Real Life', [
        new BookGroup(
            'Agatha Christie', Agatha_Christie.books as Book[]
        ),
        new BookGroup(
            'Arthur Conan Doyle', Arthur_Conan_Doyle.books as Book[]
        ),
        new BookGroup(
            'Edgar Allan Poe', Edgar_Allan_Poe.books as Book[]
        ),
        new BookGroup(
            'Jules Gabriel Verne', Jules_Gabriel_Verne.books as Book[]
        ),
        new BookGroup(
            'Mary Shelley', Mary_Shelley.books as Book[]
        ),
        new BookGroup(
            'Maurice Leblanc', Maurice_Leblanc.books as Book[]
        ),
        new BookGroup(
            'Neil Gaiman', Neil_Gaiman.books as Book[]
        ),
        new BookGroup(
            'Terry Pratchett', Terry_Pratchett.books as Book[]
        )
    ]
    ),
    new BookGroup('Tabletop Game', [
        new BookGroup(
            'Critical Role', Critical_Role.books as Book[]
        ), new BookGroup(
            'Forgotten Realms', Forgotten_Realms.books as Book[]
        ), new BookGroup(
            'High Rollers D&D', High_Rollers.books as Book[]
        ), new BookGroup(
            'MTG', MTG.books as Book[]
        )
    ]
    ),
    new BookGroup('TV', [
        new BookGroup(
            'Doctor Who', Doctor_Who.books as Book[]
        ),
        new BookGroup(
            'Kamen Rider', Kamen_Rider.books as Book[]
        )
    ]
    ),
    new BookGroup('Video Game', [
        new BookGroup('Elder Scrolls', [
            new BookGroup(
                'Daggerfall', Daggerfall.books as Book[]
            ),
            new BookGroup(
                'Oblivion',

                [
                    new BookGroup(
                        'Oblivion', Oblivion.books as Book[]
                    ),
                    new BookGroup(
                        'Shivering Isles', Shivering_Isles.books as Book[]
                    ),
                    new BookGroup(
                        'Mods',
                        [
                            new BookGroup('A Maids Tale.esp', A_Maids_Tale_esp.books as Book[]),
                            new BookGroup('AfterTheRegatta.esp', AfterTheRegatta_esp.books as Book[]),
                            new BookGroup('BladeOfTheHaunted.esp', BladeOfTheHaunted_esp.books as Book[]),
                            new BookGroup('DarkBrotherhoodChronicles.esp', DarkBrotherhoodChronicles_esp.books as Book[]),
                            new BookGroup('Demonhunter.esp', Demonhunter_esp.books as Book[]),
                            new BookGroup('DibellasWatch.esm', DibellasWatch_esm.books as Book[]),
                            new BookGroup('ElsweyrAnequina.esp', ElsweyrAnequina_esp.books as Book[]),
                            new BookGroup('GoldenCrest.esp', GoldenCrest_esp.books as Book[]),
                            new BookGroup('GTAesgaard.esp', GTAesgaard_esp.books as Book[]),
                            new BookGroup('HeartOftheDead.esp', HeartOftheDead_esp.books as Book[]),
                            new BookGroup('In The Tower Of The Crescent Moon.esp', In_The_Tower_Of_The_Crescent_Moon_esp.books as Book[]),
                            new BookGroup('Ivellon.esp', Ivellon_esp.books as Book[]),
                            new BookGroup('Kragenir\'s Death Quest.esp', Kragenirs_Death_Quest_esp.books as Book[]),
                            new BookGroup('LordKain_Adash_World.esp', LordKain_Adash_World_esp.books as Book[]),
                            new BookGroup('Maeva Scribonias Bookshop NO BookPlacing plus Castas Books plus Amalrics Books.esp', Maeva_Scribonias_Bookshop_NO_BookPlacing_plus_Castas_Books_plus_Amalrics_Books_esp.books as Book[]),
                            new BookGroup('Malevolent.esp', Malevolent_esp.books as Book[]),
                            new BookGroup('Necromancy Books.esp', Necromancy_Books_esp.books as Book[]),
                            new BookGroup('QOTW Season Four.esp', QOTW_Season_Four_esp.books as Book[]),
                            new BookGroup('QOTW Season One.esp', QOTW_Season_One_esp.books as Book[]),
                            new BookGroup('QOTW Season Three.esp', QOTW_Season_Three_esp.books as Book[]),
                            new BookGroup('QOTW Season Two.esp', QOTW_Season_Two_esp.books as Book[]),
                            new BookGroup('Reaper\'s Esmeralda\'s Desert Manor.esp', Reapers_Esmeraldas_Desert_Manor_esp.books as Book[]),
                            new BookGroup('ReclaimSancreTor.esp', ReclaimSancreTor_esp.books as Book[]),
                            new BookGroup('Satin And Hot Oil 2.esp', Satin_And_Hot_Oil_2_esp.books as Book[]),
                            new BookGroup('Satin And Hot Oil.esp', Satin_And_Hot_Oil_esp.books as Book[]),
                            new BookGroup('Sundas Morning.esp', Sundas_Morning_esp.books as Book[]),
                            new BookGroup('The Lost Spires.esp', The_Lost_Spires_esp.books as Book[]),
                            new BookGroup('The Orcs Initiation.esp', The_Orcs_Initiation_esp.books as Book[]),
                            new BookGroup('The Underking.esp', The_Underking_esp.books as Book[]),
                            new BookGroup('The_Feast.esp', The_Feast_esp.books as Book[]),
                            new BookGroup('TheElderCouncil.esp', TheElderCouncil_esp.books as Book[]),
                            new BookGroup('TOTF.esp', TOTF_esp.books as Book[]),
                            new BookGroup('Windfall.esm', Windfall_esm.books as Book[]),
                        ]
                    )
                ]
            ),
            new BookGroup(
                'Skyrim',

                [
                    new BookGroup(
                        'Skyrim', Skyrim.books as Book[]
                    ),
                    new BookGroup(
                        'Dragonborn', Dragonborn.books as Book[]
                    ),
                    new BookGroup(
                        'Mods',
                        [
                            new BookGroup('Bloodworm.esp', Bloodworm_esp.books as Book[]),
                            new BookGroup('Clockwork.esp', Clockwork_esp.books as Book[]),
                            new BookGroup('Dwarfsphere.esp', Dwarfsphere_esp.books as Book[]),
                            new BookGroup('Enderal - Forgotten Stories.esm', Enderal_Forgotten_Stories_esm.books as Book[]),
                            new BookGroup('ForgottenCity.esp', ForgottenCity_esp.books as Book[]),
                            new BookGroup('Gallowmere.esp', Gallowmere_esp.books as Book[]),
                            new BookGroup('Gray Fox Cowl.esm', Gray_Fox_Cowl_esm.books as Book[]),
                            new BookGroup('INFERNAL FLAME.esp', INFERNAL_FLAME_esp.books as Book[]),
                            new BookGroup('MoonAndStar_MAS.esp', MoonAndStar_MAS_esp.books as Book[]),
                            new BookGroup('moonpath.esp', moonpath_esp.books as Book[]),
                            new BookGroup('RodryksBooks.esp', RodryksBooks_esp.books as Book[]),
                            new BookGroup('SwordOfSigdan.esp', SwordOfSigdan_esp.books as Book[]),
                            new BookGroup('The Brotherhood of Old.esp', The_Brotherhood_of_Old_esp.books as Book[]),
                            new BookGroup('TrueHel.esp', TrueHel_esp.books as Book[]),
                            new BookGroup('Undeath.esp', Undeath_esp.books as Book[]),
                            new BookGroup('WheelsOfLull.esp', WheelsOfLull_esp.books as Book[]),
                            new BookGroup('arnima.esm', arnima_esm.books as Book[]),
                            new BookGroup('bhabhilon.esp', bhabhilon_esp.books as Book[]),
                            new BookGroup('Black Marsh North.esp', Black_Marsh_North_esp.books as Book[]),
                            new BookGroup('Black Marsh.esm', Black_Marsh_esm.books as Book[]),
                            new BookGroup('Darkend.esp', Darkend_esp.books as Book[]),
                            new BookGroup('Darkglade.esp', Darkglade_esp.books as Book[]),
                            new BookGroup('Falskaar.esm', Falskaar_esm.books as Book[]),
                            new BookGroup('HammetDungeons.esm', HammetDungeons_esm.books as Book[]),
                            new BookGroup('maslea.esm', maslea_esm.books as Book[]),
                            new BookGroup('Phenderix Magic World.esp', Phenderix_Magic_World_esp.books as Book[]),
                            new BookGroup('Phoe.esm', Phoe_esm.books as Book[]),
                            new BookGroup('The Haven From The Cold And Dark.esp', The_Haven_From_The_Cold_And_Dark_esp.books as Book[]),
                            new BookGroup('TheBawbsShire.esp', TheBawbsShire_esp.books as Book[]),
                        ]
                    )
                ]
            ),
        ]
        ),
        new BookGroup(
            'Castlevania', Castlevania.books as Book[]
        ), new BookGroup(
            'Fallout', Fallout.books as Book[]
        ), new BookGroup(
            'Minecraft', Minecraft.books as Book[]
        ), new BookGroup(
            'Runescape', RuneScape.books as Book[]
        ),
    ]
    ),
    new BookGroup('Web', [
        new BookGroup(
            'RWBY', RWBY.books as Book[]
        ),
        new BookGroup(
            'SCP', SCP.books as Book[]
        )
    ]
    )
];

export default BooksArray;

