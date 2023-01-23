# frozen_string_literal: true

# for chaining methods
class MethodChainer
  attr_reader :content

  def initialize(str)
    @content = str
  end

  def emphasize!
    @content += '!'
    # self -- notice the difference when commented out
    # What is returned?
  end

  def caps!
    @content = @content.upcase
    self
  end

  def double!
    @content += @content
    self
  end
end

# apple_chainer = MethodChainer.new('apple')
