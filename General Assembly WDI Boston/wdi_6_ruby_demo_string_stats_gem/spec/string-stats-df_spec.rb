require File.expand_path(File.dirname(__FILE__) + '/spec_helper')

describe String, "#word_count" do
  it "should have a method called word_count" do
    should respond_to :word_count
  end

	it "should return 1 when the string is one word long" do
		a_string = "apple"
		the_word_count = a_string.word_count
		the_word_count.should eq 1
	end

  it "should return 0 when the string is empty" do
    a_string = ""
    the_word_count = a_string.word_count
    the_word_count.should eq 0
  end

  it "should return 3 when the string is three words long" do
    a_string = "I am happy"
    the_word_count = a_string.word_count
    the_word_count.should eq 3
  end

  it "should return 2 when the string is two words long" do
    a_string = "You're cool"
    the_word_count = a_string.word_count
    the_word_count.should eq 2
  end

  it "should return 3 when the string is three words repeated" do
    a_string = "buffalo buffalo buffalo"
    the_word_count = a_string.word_count
    the_word_count.should eq 3
  end
end

describe String, "#unique_words" do
  it "should have a method called unique_words" do
    should respond_to :unique_words
  end

  it "should return an array of unique words" do
    a_string = "apple the apple brave cars daring a the question"
    unique_words = a_string.unique_words
    unique_words.should eq ['apple', 'the', 'brave', 'cars', 'daring', 'a', 'question']
  end

  it "should return an empty array with a string length of zero" do
    a_string = ""
    unique_words = a_string.unique_words
    unique_words.should eq []
  end
end

describe String, "#unique_word_count" do
  it "should have a method called unique_word_count" do
    should respond_to :unique_word_count
  end

  it "should return 1 when the string is one word long" do
    a_string = "apple"
    the_unique_word_count = a_string.unique_word_count
    the_unique_word_count.should eq 1
  end

  it "should return 0 when the string is empty" do
    a_string = ""
    the_unique_word_count = a_string.unique_word_count
    the_unique_word_count.should eq 0
  end
end

describe String, "#word_frequencies" do
  it "should have a method called word_frequencies" do
    should respond_to :word_frequencies
  end

  it "should return a hash of unique word frequencies" do
    a_string = "happy happy joy joy ren stimpy"
    unique_word_hash = a_string.word_frequencies
    unique_word_hash.should eq happy:2, joy:2, ren:1, stimpy:1
  end
end