# LESSON-7 - Работа с защищенными маршрутами.
Ветка: lesson-7

## Установка зависимостей
npm ci

## Сборки

### Проект через esbuild
Прод: npm run build:prod
Dev: npm run build:dev

### Библиотека через esbuild
cjs: npm run build:lib:cjs
esm: npm run build:lib:esm
cjs + esm: npm run build:lib

### Библиотека через swc
cjs: npm run build:lib:swc:cjs
esm: npm run build:lib:swc:esm
cjs + esm: npm run build:lib:swc

## Чек-лист
- [x]  Сборка приложения через esbuild — 3 балла
- [x]  Сборка библиотеки через esbuild — 3 балла
- [x]  Конфигурация production и dev-сборки — 3 балла
- [x]  Использование swc для сборки библиотеки — 1.5 балла
- [x]  Code splitting на основе маршрутов — 1.5 балла
