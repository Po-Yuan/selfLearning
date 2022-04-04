import React from 'react';
import ReactDom from 'react-dom';

import MenuItem from './component/MenuItem.js';



ReactDom.render(<>Hello moto <br/> <MenuItem >test children</MenuItem> </>, document.getElementById('root'));