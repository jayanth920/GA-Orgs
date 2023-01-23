# define a sequence error
class SequenceError < Exception
end

module GA
  class Sequence

    def sequence(n, m, c)
      i = 0
      # loop n times
      while(i < n)
        # pass the 
        yield( i*m + c)
        i += 1
      end
    end
  end
end


s1 = GA::Sequence.new
result = []
s1.sequence(5, 2, 2) do |x|
  # puts "x is #{x}"
  result << x
end
puts "result is #{result}"


raise SequenceError if result != [2, 4, 6, 8, 10]

puts "Yeees, it woreks!"
