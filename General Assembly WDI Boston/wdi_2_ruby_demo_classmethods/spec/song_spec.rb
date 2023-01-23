require_relative 'spec_helper'
require_relative '../lib/song'

describe GA::Song do

  it "#new" do
    expect(GA::Song.new("Let it be", 1.99, "http://beatles.com/let_it_be.mp3")).to be_an_instance_of GA::Song
  end

  subject {GA::Song.new("Let it be", 1.99, "http://beatles.com/let_it_be.mp3")}

  it "should not be able to change name" do
    expect{ subject.name = 'Abbey Road'}.to raise_error NoMethodError
  end

  let(:songs) do
    songs = []
    4.times do |i|
      songs << GA::Song.new("GA::Song#{i}", 1.00 + (i*0.20), "http:://song.com/song#{1}.mp3")
    end
    songs
  end

  it ".total_price" do
    expect(GA::Song.total_price(songs, "MA")).to eq 4.76
  end

  describe "with a  discount" do

    let(:songs) do
      songs = []
      6.times do |i|
        songs << GA::Song.new("GA::Song#{i}", 1.00 + (i*0.20), "http:://song.com/song#{1}.mp3")
      end
      songs
    end

    it " .total_price" do
      expect(GA::Song.total_price(songs, "MA")).to eq 8.14
    end

  end

end
