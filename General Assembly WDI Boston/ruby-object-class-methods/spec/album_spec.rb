# frozen_string_literal: true

require_relative '../lib/album.rb'

describe 'Album' do
  subject(:album) { Album.new }

  it 'is an album' do
    expect(subject).to be_a(Album)
  end

  context 'searching' do
    it 'can search for a song' do
      expect(Album.search('Formation')).to be_a(Song)
    end

    context 'case insensitive search' do
      let(:song) { Album.search('formation') }
      let(:song_sorry) { Album.search('SORRY') }
      it 'can find a song case insenstive' do
        expect(song).to be_a(Song)
        expect(song.title).to eq 'Formation'
        expect(song_sorry.title).to eq 'Sorry'
      end
    end

    context 'partial match' do
      let(:song) { Album.search('free') }
      let(:song_sandcastles) { Album.search('ASTL') }
      it 'can find a song given partial title' do
        expect(song.title).to eq 'Freedom'
        expect(song_sandcastles.title).to eq 'Sandcastles'
      end
    end
  end

  it 'returns the correct song count' do
    expect(Album.count).to eq(4)
  end
end
