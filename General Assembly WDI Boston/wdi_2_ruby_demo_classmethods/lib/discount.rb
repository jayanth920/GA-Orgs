module GA
  module Discount
    # given the number of songs return a discount
    # percentage

    def discount(num_of_songs)
      if num_of_songs >= 5
        10.0
      elsif num_of_songs > 10
        20.0
      else
        0
      end
    end
  end
end
