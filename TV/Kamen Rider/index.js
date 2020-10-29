import Showa from './Showa';
import Heisei from  './Heisei';
//import Reiwa from './Reiwa';
import Other from './Other';

const Kamen_Rider = new BookGroup('Kamen Rider', [
    Showa,
    Heisei,
    //Reiwa,
    Other
])

export default Kamen_Rider;