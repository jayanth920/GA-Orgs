# http://www.ruby-doc.org/core-2.2.0/String.html
RSpec.describe String do
  it 'can be created with a literal using single or double quotes' do
    expect('I am a string').to be_a String

    # Note: If not using string interpolation,
    # prefer to use single quotes in your code
    expect("I am also string").to be_a String
  end

  # While not preferred, this is also possible
  it 'can be created with String.new as well' do
    expect(String.new('This is too verbose')).to be_a String
  end

  describe 'common instance methods' do
    describe '#reverse' do
      it 'returns a copy of the string reversed' do
        expect('foo'.reverse).to eq 'oof'
      end

      it 'does not mutate the original string' do
        a_string = 'foo'
        result_string = a_string.reverse
        expect(a_string).to_not be result_string
      end
    end

    describe '#reverse!' do
      it 'returns a copy of the string reversed' do
        expect('foo'.reverse!).to eq 'oof'
      end

      it 'mutates the original string' do
        a_string = 'foo'
        result_string = a_string.reverse!

        # Notes, these are the same object!
        expect(a_string).to be result_string
      end
    end

    describe '#length' do
      it 'returns the length of a string' do
        expect('apple'.length).to be 5
        expect('cat'.length).to be 3
      end
    end

    describe '[]' do
      it 'returns a character at an index position in a string' do
        expect('apple'[0]).to eq 'a'
        expect('apple'[1]).to eq 'p'

        # Negative indexes loop back around
        expect('apple'[-1]).to eq 'e'
      end
    end

    describe '+' do
      it 'concatinates two strings' do
        expect('hello ' + 'world').to eq 'hello world'
      end
    end

    describe '<<' do
      it 'adds a string to the end of the string, mutating the original' do
        original_string = 'foo'
        original_object_id = original_string.object_id
        original_string << 'bar'
        new_object_id = original_string.object_id

        expect(original_string).to eq 'foobar'
        expect(original_object_id).to be new_object_id
      end
    end

    describe '#to_sym' do
      it 'returns a symbol representation of the string' do
        word = 'apple'
        expect(word.to_sym).to be_a Symbol
        expect(word.to_sym).to eq :apple
      end
    end
  end

  describe 'string interpolation' do
    it 'allows you to insert a variable value into a string' do
      name = 'Kelly'

      # Note, use of double quotes
      greeting = "Hi, call me #{name}"

      expect(greeting).to eq 'Hi, call me Kelly'
    end

    it 'allows you to insert a number into a string' do
      age = 28
      my_age = "I am #{age} years old"
      expect(my_age).to eq 'I am 28 years old'
    end

    it 'allows insertion of multiple values' do
      name = 'Pedro'
      age = 34
      greeting = "My name is #{name} and I am #{age}"
      expect(greeting).to eq 'My name is Pedro and I am 34'
    end
  end
end
