class MyArray < Array

  def whats_self
    puts "self is #{self}"
  end
  
  def my_each
    for i in self
      # puts "i is #{i}"
      # yield(i)
      yield(i) if block_given?
    end
  end

  def my_inject(sum, &block)
    sum ||= 0
    for i in self
      sum += block.call(sum, i) if block_given?
    end
    sum
  end
end
