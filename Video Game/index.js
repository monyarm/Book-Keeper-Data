
//#region Video Games

import Castlevania from './Castlevania.json';
import Fallout from './Fallout.json';
import Minecraft from './Minecraft.json';
import RuneScape from './RuneScape.json';
import Pokemon from './Pokemon.json';
//#endregion

import convert from '@book/convert';

const Video_Game = new BookGroup('Video Game', [
    Elder_Scrolls,
    new BookGroup('Castlevania', convert(Castlevania.books)), 
    new BookGroup('Fallout', convert(Fallout.books)), 
    new BookGroup('Minecraft', convert(Minecraft.books)), 
    new BookGroup('Runescape', convert(RuneScape.books)), 
    new BookGroup('Pokemon', convert(Pokemon.books)),
])

export default Video_Game;