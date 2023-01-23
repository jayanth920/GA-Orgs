def lucky_number(num)
  num * 8
end

def fortune
  "Your lucky number is: " + lucky_number(7).to_s
end

puts fortune
