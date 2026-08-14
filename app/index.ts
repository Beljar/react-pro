import { sayHi } from './utils.ts';
import { routes } from './routes.ts';

sayHi();

const mod = await import('./helpers.ts');
console.log(mod.sum(1, 2));

const home = await routes.home();
const about = await routes.about();

console.log(home.renderHome());
console.log(about.renderAbout());
