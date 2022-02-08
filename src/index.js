import _ from 'lodash';
import './mystyle.css'; 
import { Wine } from './menu.js'; 
import { ContactPage } from './contact.js'; 


//for watching the html file 
require('./home.html')

//document.getElementById('menu').innerHTML = '<p>Suspendisse et nisi at neque auctor ultricies vel vitae tellus. Sed sollicitudin metus a odio egestas vulputate. Phasellus quis erat sodales, ornare erat eget, sodales dolor. Curabitur non tortor non nisl dignissim sagittis. Integer vitae erat aliquet, dapibus leo interdum, euismod lectus. Praesent commodo a est ornare aliquet. Duis vel imperdiet purus, vel volutpat felis. Suspendisse at elit vel quam sodales hendrerit. Curabitur quis lacus lacinia, pellentesque lorem aliquam, molestie ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Integer id ex sed lacus fermentum cursus nec elementum mauris.</p>'
const menu = document.createElement('div');
const wine = Wine();
menu.setAttribute('id', 'menu_block'); 
menu.appendChild(wine);
//menu.appendChild(appetizer);
document.getElementById('menu').appendChild(menu);

document.getElementById('contact').appendChild(ContactPage() )