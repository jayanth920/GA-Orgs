![](/ga_cog.png)

---

Title: Stock Prices <br>
Type: Lab <br>
Creator: Mark De May <br>

---

# Stock Price Database

Your boss wants you to design and build an API. The API is going to deliver some data about the **share prices** for saleable **stocks** on the stock market.

You know you will be dealing with **share prices** and **stocks**, and that the two things are related.

You've been given a rails project that has the stock routes. You'll be adding prices to the database and API.

We will be continuing the lab in the afternoon.

## Set Up


1. Set up a postgres database called 'stock_prices', add a table for 'stocks', and seed the database.

```
CREATE DATABASE stock_prices;
\c stock_prices
CREATE TABLE stocks (id SERIAL, company VARCHAR(40), symbol VARCHAR(40));
INSERT INTO stocks (company, symbol) VALUES ('Apple', 'APPL');
INSERT INTO stocks (company, symbol) VALUES ('Microsoft', 'MS');
INSERT INTO stocks (company, symbol) VALUES ('Mad Man Drones', 'WHEEEEE');
```

1. Create the 'prices' table in your database. See below for the information the table should store. Seed your database with a few prices.
1. Set up a one-to-many relationship between stocks and prices for each stock.

## User Stories

  - As a user, I can add a new stock price to the database.
    - Price information
      - Date
      - Price
      - Stock ID
  - As a user, I can get all prices in the database
  - As a user, I can get a single price in the database
  - As a user, I can get all prices for a single stock
  - As a user, I can delete a stock price
  - As a user, I can update a stock

Test your routes with Postman as you go.
   - :exclamation: Remember to use "raw" when post/putting.
