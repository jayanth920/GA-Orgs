require 'date'
module MyDatingApp

  class Date
    attr_accessor :description, :date_day

    def initialize(description)
      @description = description
    end
    def date_day=(date)
      @date_day = date 
    end

  end
end

# Oh no, not only a bad date but my app is broken!
bad_date = MyDatingApp::Date.new('Jeeeeeerk')

# last saturday
bad_date.date_day = Date.strptime('06-14-2014', '%m-%d-%Y')

puts "The Date last #{bad_date.date_day} was with a #{bad_date.description}"
