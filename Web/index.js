import RWBY from './RWBY.json';
import SCP from './SCP.json';

import convert from '@books/convert';

const Web = new BookGroup('Web', [
    new BookGroup('RWBY', convert(RWBY.books)),
    new BookGroup('SCP', convert(SCP.books))
]);

export default Web;