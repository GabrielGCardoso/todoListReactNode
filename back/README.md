## testing
- to test first boot the server `docker-compose.up server --build -d`
## creating database after run docker
- docker exec -i mysql  mysql -uroot -pserver -e 'create database atm_example'
- after use a Rest client to test, in this project you could use [this](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) 
- the test calls are on back/requests.http