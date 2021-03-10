// console.log("Module Javascript");

//import 
import { fullname as namalengkap, 
    person as orang, 
    display as tampil 
} from "./person.js";

import Input, { color} from "./Textinput.js";

console.log(namalengkap, orang);
tampil(orang);

Input();
console.log(color);