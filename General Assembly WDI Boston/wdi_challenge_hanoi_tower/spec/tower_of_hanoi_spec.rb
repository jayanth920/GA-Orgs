require 'spec_helper'
require_relative '../lib/tower_of_hanoi'

RSpec.describe 'solve_hanoi_tower' do
  it 'uses the minimum number of moves to solve the puzzle' do
    expect(solve_hanoi_tower([5,4,3,2,1], [], [])).to eq [[],[],[5,4,3,2,1]]
    expect(solve_hanoi_tower([8,7,6,5,4,3,2,1],[],[])).to eq [[],[],[8,7,6,5,4,3,2,1]]
  end
end