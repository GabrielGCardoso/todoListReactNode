docker-compose up --build -d db
docker exec -i mysql  mysql -uroot -pserver -e 'create database todo_list'
npx sequelize db:migrate