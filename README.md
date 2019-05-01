# Worthy - Home Assignment

###### The mission:

As a marketplace for luxury goods we want to be able to price items
automatically.
For simplicity purposes you can assume that the only item type being sold
through Worthy is a diamond. Diamonds can be categorized by their Carat
Weight, Cut, Color and Clarity
Please add a new feature to enable this.

###### **Base assumptions**: 

1. all data that added into db was chosen randomly but can be change without code interactions.
2. each jewelry has unit_price that related to it ,base on it weight ex: 1 carat = 100 dollar.
3. related to the above the base price of each jewelry should  be calculated up front ex: carat-weight * unit_price
4. all other characteristics are based on this price and increase or decrease his worth in percentage.
5. jewelry table created for future extension in order to handle other use cases.


Installation:

- clone the following project from git repository: https://github.com/BungHolem32/Worthy
- open terminal 
- cd into project
- type `npm install `
- type `npm run watch` 
- you can configure your database information inside src/config/db 
