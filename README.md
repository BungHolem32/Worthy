# Worthy - Home Assignment

#### The Task:

As a marketplace for luxury goods we want to be able to price items
automatically.
For simplicity purposes you can assume that the only item type being sold
through Worthy is a diamond. Diamonds can be categorized by their Carat
Weight, Cut, Color and Clarity
Please add a new feature to enable this.

## The Mission:

- build generic feature that let user pass jewelry characteristics and return the final price according to them.

## Base assumptions:

- all data that added into db was chosen randomly but can be change without code interactions.
- each jewelry has unit_price that related to it ,base on it weight ex: 1 carat = 100 dollar.
- related to the above the base price of each jewelry should  be calculated up front ex: carat-weight * unit_price
- all other characteristics are based on this price and increase or decrease his worth in percentage.
- jewelry table created for future extension in order to handle other use cases.

##Usage:
 
 this api response to http://localhost:3000/api/calculatePrice
 
 METHOD:POST
 BODY params:
 - **weight**: INTEGER
 - **cut**   ['ideal','poor','fair',  'very good','good']
 - **color**  ['d','e', 'f',g', 'h','i','j', 'k','l','m','n', 'o','p','q', 'r','s','t','u', 'v', 'w', 'x', 'y', 'z']
 - **clarity** [ 'fl', 'if','vvs1', 'vvs2','vs1', 'vs2', 'si1', 'si2', 'si3', 'i1','i2','i3'],


## Installation:

- Clone the following project from git repository: https://github.com/BungHolem32/Worthy
- Open terminal
- Cd into project
- Configure your database information inside src/config/database.json
```{
  "development": {
    "username": "ilan",
    "password": "ilan",
    "database": "worthy_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "ilan",
    "password": "ilan",
    "database": "worthy_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "ilan",
    "password": "ilan",
    "database": "worthy",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "env": {
    "use_env_variable": false
  }
}
```

- Type `npm install` 
- Type `npx sequelize db:migrate`  to migrate all tables into your database.
- Type `npx sequelize db:seed:all` to seed all random into into the tables.
- Finally type `npm run server` and you ready to go. 	
 	 	
 	 	
##Dockerized Database:
 for your comfort there's also dockerized_database.
 _if you choose to use it do the following:_
 - Open terminal 
 - Install docker according to the following details: [https://www.docker.com/get-started]
 - Cd into dockerized_database cd dockerized_database
 - Type docker build -t test-mysql .
 - Type docker run -d -p 3306:3306 --name test-mysql -e MYSQL_ROOT_PASSWORD=root test-mysql
 
 - enter to the database with the following details:
 ```
  user => test
  password => test
  port => 3306
 ``` 	
 
