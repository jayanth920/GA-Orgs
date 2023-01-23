require 'spec_helper'
require_relative '../lib/race'
require_relative '../lib/racer'

describe Racer do
  let(:racer){Racer.new("Bob")}
  let(:five_k){Race.new("Race for Lizife", "foot", 5, [256, 270, 310, 317, 268])}
  let(:five_k_two){Race.new("da macmommy race", "foot", 5, [242, 263, 265, 254, 241])}
  let(:ten_k){Race.new("race for the mega cure", "foot", 10, [280, 285, 300, 310, 311, 315, 317, 306, 290, 255])}
  let(:bike_ten_k){Race.new("biktastic race", "bike", 10, [105, 110, 123, 124, 127, 124, 123, 133, 142, 99])}
  let(:bike_ten_k_two){Race.new("bikathon", "bike", 10, [103, 110, 120, 124, 127, 115, 123, 146, 142, 92])}
  describe "#name" do
    it "has a name" do
      expect(racer.name).to eq("Bob")
    end
  end
  describe "#races" do
    it "has a races property that starts as an empty array" do
      expect(racer.races).to eq([])
    end
  end
  describe "#races=" do
    it "should raise error if you assign races directly" do
      expect{racer.races="bob"}.to raise_error(NoMethodError)
    end
  end
  describe "#add_race" do
    it "can add a race to a person" do
      expect(racer.races.count).to eq(0)
      racer.add_race five_k
      expect(racer.races.count).to eq(1)
    end
  end
  describe "#best_race" do
    it "can find the best race of a given race type and distance" do
      racer.add_race five_k
      racer.add_race five_k_two
      expect(racer.best_race "foot", 5).to eq(five_k_two)
    end
  end
  # describe "#best_avg_speed" do
  #   it "can find the best average speed in meters per minute of a given race type and distance rounded to two decimal places" do
  #     racer.add_race five_k
  #     racer.add_race five_k_two
  #     expect(racer.best_avg_speed "foot", 5).to eq(237.15)
  #   end
  # end
  # describe "#fastest_km_time" do
  #   it "can find the fastest time for km given a race type" do
  #     racer.add_race five_k
  #     racer.add_race five_k_two
  #     racer.add_race ten_k
  #     racer.add_race bike_ten_k
  #     racer.add_race bike_ten_k_two
  #     expect(racer.fastest_km_time "foot").to eq(241)
  #     expect(racer.fastest_km_time "bike").to eq(92)
  #   end
  # end
end
