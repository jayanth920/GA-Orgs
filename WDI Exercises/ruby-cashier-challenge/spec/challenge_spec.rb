require_relative '../lib/challenge.rb'

RSpec.describe 'Challenge: ' do
  describe '#make_change' do
    it 'returns the quantities of coins necessary to make change, without overpaying' do
      #                                      Q, D, N, P
      expect(make_change(4.99, 5.00)).to eq([0, 0, 0, 1])
      expect(make_change(4.95, 5.00)).to eq([0, 0, 1, 0])
      expect(make_change(4.80, 5.00)).to eq([0, 2, 0, 0])
      expect(make_change(3.00, 5.00)).to eq([8, 0, 0, 0])
      expect(make_change(4.31, 5.00)).to eq([2, 1, 1, 4])
    end
    context 'when given a "denominations" array as an optional argument' do
      it 'returns an equal-sized array to the "denominations" array' do
        expect(make_change(3.31, 5.00, [1]).length).to eq(1)
        expect(make_change(3.31, 5.00, [100, 50, 25, 1]).length).to eq(4)
      end
      it 'returns the returns the quantities of the coins specified by the
          "denominations" array necessary to make change, without overpaying' do
        expect(make_change(3.31, 5.00, [1])).to eq([169])
        expect(make_change(3.31, 5.00, [100, 50, 25, 1])).to eq([1, 1, 0, 19])
      end
      context 'where it is not possible to make change with the given denominations' do
        it 'will round down, and give the maximum possible change without going over' do
          expect(make_change(3.31, 5.00, [100, 50])).to eq([1, 1])
          expect(make_change(3.31, 5.00, [100, 50, 10])).to eq([1, 1, 1])
          expect(make_change(3.31, 5.00, [100, 50, 10, 5])).to eq([1, 1, 1, 1])
          expect(make_change(3.31, 5.00, [100, 50, 10, 5, 3])).to eq([1, 1, 1, 1, 1])
          expect(make_change(3.31, 5.00, [100, 50, 10, 5, 1])).to eq([1, 1, 1, 1, 4])
        end
      end
    end
  end
end
