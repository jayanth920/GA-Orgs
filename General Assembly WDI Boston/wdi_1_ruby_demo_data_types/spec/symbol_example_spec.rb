# http://www.ruby-doc.org/core-2.2.0/Symbol.html
# Symbols are like strings, but simpler
# We often use them as labels for things
# that will never mutate
# They are used very frequently as keys for hashes
# Unlike strings, creation of two of them yields the same object_id!
RSpec.describe Symbol do
  it 'can be created with a literal' do
    expect(:a_symbol).to be_a Symbol
  end

  it 'once created, they are the same, unlike strings' do
    # These have the same strings as their values
    # but the values are in different place sin memory
    first_string = 'foo'
    second_string = 'foo'

    # These both point to the same place in memory
    first_symbol = :foo
    second_symbol = :foo

    expect(first_string).to_not be second_string

    #another way of checking is via the object_id directly
    expect(first_string.object_id).to_not eq second_string.object_id

    # But with symbols they are the same!
    expect(first_symbol.object_id).to eq second_symbol.object_id

    # And certainly, the value of a string and symbol are different
    # even if the same word was used
    expect(first_string).to_not eq first_symbol

    # However, if we cast a string with the same value to a symbol...
    # we expect them to be the same!
    expect(first_string.to_sym).to eq first_symbol
  end

  describe '#to_s' do
    it 'returns symbol as a string' do
      a_symbol = :apple
      expect(a_symbol.to_s).to be_a String
      expect(a_symbol.to_s).to eq 'apple'
    end
  end
end
