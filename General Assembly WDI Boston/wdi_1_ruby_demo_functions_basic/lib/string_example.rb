def reverse_string(string)
  string.reverse
end

def uppercase_string(string)
  string.upcase
end

def reverse_and_uppercase_string(example)
  reverse_string(uppercase_string(example))
end
