# frozen_string_literal: true

require_relative '../lib/album.rb'

describe 'Song' do
  subject(:song) { Song.new(title: 'Sympathique') }

  it 'is an song' do
    expect(subject).to be_a(Song)
  end

  it 'has required attributes' do
    expect(subject.instance_variables).to include(:@title)
  end

  it 'has getter for @title' do
    expect { subject.title }.not_to raise_error
  end

  it 'has no setter for @title' do
    expect { subject.title = 'Born in the USA' }. to raise_error(NoMethodError)
  end
end
