import { fn, Constant, Variable } from './syntax.js';
// import { fn, Constant as C, Variable } from './syntax.js';
// import SomeFunction from './syntax.js';

// случай когда названия функций одинаковые в двух модулях
import { X as XFromModule1 } from './module1.js';
import { X as XFromModule2 } from './module2.js';

fn();
console.log(Constant);
console.log(Variable);

// XFromModule1();
// XFromModule2();

// SomeFunction(); // default
