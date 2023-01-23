require 'spec_helper'
require_relative '../lib/race.rb'

describe Race do
  subject(:five_k){Race.new("5k", "foot", 5, [256, 270, 310, 317, 268])}
  subject(:five_k_two){Race.new("da macmommy race", "foot", 5, [242, 263, 265, 254, 241])}
  subject(:ten_k){Race.new("10k", "foot", 10, [280, 285, 300, 310, 311, 315, 317, 306, 290, 255])}
  describe "#name" do
    it "has a name" do
      expect(five_k.name).to_not be_nil
      expect(five_k.name).to eq("5k")
      expect(ten_k.name).to eq("10k")
    end
  end
  describe "#race_type" do
    it "has a race_type" do
      expect(five_k.race_type).to eq("foot")
      expect(ten_k.race_type).to eq("foot")
    end
  end
  describe "#distance" do
    it "has a distance" do
      expect(five_k.distance).to eq(5)
      expect(ten_k.distance).to eq(10)
    end
  end
  describe "#km_times" do
    it "has km_times" do
      expect(five_k.km_times).to eq([256, 270, 310, 317, 268])
      expect(ten_k.km_times).to eq([280, 285, 300, 310, 311, 315, 317, 306, 290, 255])
    end
  end
  describe "#total_time" do
    it "has a total time" do
      expect(five_k.total_time).to eq(1421)
      expect(ten_k.total_time).to eq(2969)
    end
  end
  describe "slowest_km" do
    it "can get the time for the km that took the longest amount of time" do
      expect(five_k.slowest_km).to eq(317)
      expect(ten_k.slowest_km).to eq(317)
    end
  end
  describe "quickest_km" do
    it "can get the time for the km that took the least amount of time" do
      expect(five_k.quickest_km).to eq(256)
      expect(ten_k.quickest_km).to eq(255)
    end
  end
  describe "#avg_time_per_km" do
    it "has an average time per km rounded to 2 decimal places" do
      expect(five_k.avg_time_per_km).to eq(284.20)
      expect(ten_k.avg_time_per_km).to eq(296.90)
    end
  end
  # describe "#avg_speed" do
  #   it "has an average speed for the race rounded to 2 decimal places in meters per minute" do
  #     expect(five_k.avg_speed).to eq(211.12)
  #     expect(five_k_two.avg_speed).to eq(237.15)
  #     expect(ten_k.avg_speed).to eq(202.09)
  #   end
  # end
  # describe "#human_readable_times_for_kms" do
  #   it "can get human readable times in minutes and seconds for km times" do
  #     expect(five_k.human_readable_times_for_kms).to eq([
  #       "4 minute(s) 16 second(s)",
  #       "4 minute(s) 30 second(s)",
  #       "5 minute(s) 10 second(s)",
  #       "5 minute(s) 17 second(s)",
  #       "4 minute(s) 28 second(s)"
  #       ])
  #   end
  # end
end
