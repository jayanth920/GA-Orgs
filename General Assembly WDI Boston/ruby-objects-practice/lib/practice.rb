# frozen_string_literal: true

##
# This class is used to calculate the number of stops between MBTA subway
# stations
class Subway
  ##
  # Returns the number of stops between stations
  #
  # Params:
  # +start_line+:: +String+ name of start line
  # +start_station+:: +String+ name of start station
  # +end_line+:: +String+ name of end line
  # +end_station+:: +String+ name of end station
  #
  # ==== Examples
  #
  # @mbta = Subway.new
  # @mbta.stops_between_stations('Red', 'Alewife', 'Red', 'Alewife')
  # returns 0
  #
  # @mbta.stops_between_stations('Red', 'Alewife', 'Red', 'South Station')
  # returns 7
  #
  # @mbta.stops_between_stations('Red', 'South Station', 'Green', 'Kenmore')
  # returns 6
  #
  def stops_between_stations(start_line, start_station, end_line, end_station)
    # YOUR CODE GOES HERE
  end
end

##
# This class is used to create instances of Subway lines
#
# ==== Examples
#
# @line = Line.new('Red', stations_array)
# @line.name # returns 'Red'
# @line.stations # returns stationsArray
#
class Line
  ##
  # Returns a Line instance
  #
  # Params:
  # +name+:: +String+ name of the subway line (ex: 'Red')
  # +stations+:: +Array+ a collection of stations that belong to the line
  #
  def initialize(name, stations)
    # YOUR CODE GOES HERE
  end
end

##
# This class is used to create instances of Subway stations
#
# ==== Examples
#
# @station = Station.new('Alewife')
# @station.name # returns 'Alewife'
#
class Station
  ##
  # Returns a Station instance
  #
  # Params:
  # +name+:: +String+ name of the subway line (ex: 'Red')
  #
  def initialize(name)
    # YOUR CODE GOES HERE
  end
end
