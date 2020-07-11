#!make
db-start:
	docker-compose build
	docker-compose up -d

db-stop:
	docker-compose down

db-rebuild:
	docker-compose down
	sudo rm -rf data
	docker-compose build

db-migrate:
	npx sequelize-cli db:migrate

db-create-seed:
	npx sequelize-cli seed:generate --name $(NAME)

db-seed:
	npx sequelize-cli db:seed:all

db-migrate-reset:
	npx sequelize-cli db:migrate:undo:all

db-seed-reset:
	npx sequelize-cli db:seed:undo:all

db-seed-undo:
	npx sequelize-cli db:seed:undo

db-migrate-undo:
	npx sequelize-cli db:migrate:undo

db-dev:
	make db-migrate
	make db-seed
