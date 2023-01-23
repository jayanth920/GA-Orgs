require 'byebug'
class String

  def normalize
    binding.byebug
  end

end
# This will give you the contents of the `sample.txt` file as one big string
sample_text = File.read('sample.txt')

p sample_text.normalize