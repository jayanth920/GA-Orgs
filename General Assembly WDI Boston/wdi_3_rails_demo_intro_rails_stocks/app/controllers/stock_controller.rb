class StockController < ApplicationController
  def show
    # http://localhost:3000/stocks?ticker=tsla
    stock_symbol = params[:ticker]
    @stock = StockQuote::Stock.quote(stock_symbol)
  end
end
