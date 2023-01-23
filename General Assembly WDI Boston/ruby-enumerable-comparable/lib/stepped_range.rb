# frozen_string_literal: true

#
class SteppedRange
  attr_reader :start, :stop, :interval
  private :start, :stop, :interval
  def initialize(start, stop, interval)
    @start = start
    @stop = stop
    @interval = interval
  end
end
