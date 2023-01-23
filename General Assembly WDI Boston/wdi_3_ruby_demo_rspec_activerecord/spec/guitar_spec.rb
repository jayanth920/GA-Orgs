require 'main'

# Describe sets up a bigger thing to test
describe Guitar do
  # individual test
  it 'has guitars in the database' do
    guitars = Guitar.all
    guitars.count.should > 0
    guitars.count.is_a?(Integer)
  end

  # it 'allows creation of new guitars with no params' do
  #   current_guitar_count = Guitar.all.count
  #   Guitar.create()
  #   new_guitar_count = Guitar.all.count
  #   new_guitar_count.should == current_guitar_count + 1
  # end
  it 'requires a model to create a guitar' do
    Guitar.create(model: "Telecaster").valid?.should == true
  end
end