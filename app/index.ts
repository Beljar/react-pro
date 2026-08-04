import { sayHi } from './utils.ts';

sayHi();
const mod = await import('./helpers.ts');
console.log(mod.sum(1, 2));
