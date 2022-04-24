install: # установка npm ci
		npm ci
brain-games: # запуск игры
		node bin/brain-games.js
publish: # выполнение publish --dry-run
		npm publish --dry-run
lint: # проверка линтёром
		npx eslint .
brain-calc: # запуск игры в калькулятор
		node bin/brain-calc.js