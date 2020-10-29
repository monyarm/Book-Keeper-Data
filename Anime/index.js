import BookGroup from '@/bookgroup';

import Bleach from './Bleach';
import Naruto from './Naruto';

const Anime = new BookGroup('Anime', [
    Bleach,
    Naruto
]);

export default Anime;