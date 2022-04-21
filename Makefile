install: # установка npm ci
		npm ci
brain-games: # запуск игры
		node bin/brain-games.js
publish: # выполнение publish --dry-run
		npm publish --dry-run