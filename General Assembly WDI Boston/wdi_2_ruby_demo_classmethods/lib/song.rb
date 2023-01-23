require 'pry'
require_relative './tax'
require_relative './discount'

module GA
  class Song
    include Tax
    extend Discount

    attr_accessor :price, :url
    attr_reader :name

    def initialize(name, price, url)
      @name = name
      @price = price
      @url = url
    end

    def price(state)
      @price - (@price * state_rate(state)/100) - (@price * Tax::FED_RATE/100)
    end

    def self.total_price(songs, state)
      total = songs.inject(0) do|sum, song|
        sum += song.price(state)
      end
      total = (total - discount(songs.length)/100).round(2)
    end

    def to_s
      "Song: name = #{@name}, price = #{@price}, url = #{@url}"
    end
  end
end
