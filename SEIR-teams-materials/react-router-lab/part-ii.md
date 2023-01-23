# Part II: Adding API

In this portion of the lab, your stock tracking app will be communicating with
the following API:

[IEX Cloud](https://iexcloud.io/)

Register for an API and verify your email to receive your API token


## 1. Dashboard (`/stocks`)

Similar to Part I, this page should retrieve all stocks from `/data/stock-data.json`
and display them on the page.

## 2. Stock (`/stocks/:symbol`)

Let's remove the hard-coded data. Instead, we should pull some information from [IEX Trading](https://iextrading.com/developer/docs/) on each stock. Specifically, we'd like to publish the stock's 
last sale price and security type on this page.

Take a look at this endpoint as an example and study what data come back from this API:
https://cloud.iexapis.com/stable/stock/SNAP/quote?token=YOUR_TOKEN_HERE



## Bonus: Axios

It's very common for React developers to use
[Axios](https://github.com/axios/axios) instead of `fetch()` for making AJAX
requests. The API is similar, so see if you can swap out your `fetch()` calls.

## Bonus: Deploy

You can easily build and deploy React apps using `create-react-app` and
[`surge.sh`](https://surge.sh). First, build a final version of your react app
with `npm build`. Then, follow the instructions on
[`surge.sh`](https://surge.sh) to deploy your React app.

## Bonus: Alpha Vantage

The [Alpha Vantage](https://www.alphavantage.co/documentation/) API has a lot of
data about stocks, including time-series data. As a bonus, swap out IEX Trading
for the Alpha Vantage API. Update your `/stocks/:symbol` view to show some of
the additional data provided by this API.

```js
{
  "Meta Data": {
    "1. Information": "Intraday (1min) prices and volumes",
    "2. Symbol": "MSFT",
    "3. Last Refreshed": "2017-07-11 16:00:00",
    "4. Interval": "1min",
    "5. Output Size": "Compact",
    "6. Time Zone": "US/Eastern"
  },
  "Time Series (1min)": {
    "2017-07-11 16:00:00": {
      "1. open": "70.0700",
      "2. high": "70.1250",
      "3. low": "69.9900",
      "4. close": "69.9900",
      "5. volume": "2311827"
    },
    "2017-07-11 15:59:00": {
      "1. open": "70.0650",
      "2. high": "70.0700",
      "3. low": "70.0500",
      "4. close": "70.0650",
      "5. volume": "115405"
    },
    ... //and so so forth
  }
}
```
