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
	docker-compose up -d

db-migrate:
	npx sequelize-cli db:migrate

db-create-migration:
	npx sequelize-cli migration:create --name $(NAME)

db-migrate-reset:
	npx sequelize-cli db:migrate:undo:all

db-migrate-undo:
	npx sequelize-cli db:migrate:undo

db-seed:
	npx sequelize-cli db:seed:all

db-seed-reset:
	npx sequelize-cli db:seed:undo:all

db-seed-undo:
	npx sequelize-cli db:seed:undo

db-create-seed:
	npx sequelize-cli seed:generate --name $(NAME)

db-dev:
	make db-migrate
	make db-seed
