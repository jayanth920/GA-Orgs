# frozen_string_literal: true

letters = 'iqvohtcnqqsicgpapseesslhmeeqvocdrvarxtflesspit'.split('')

message = ''

letters.each_index do |i|
  message += letters[i] if i.zero? || (i % 5).zero?
end

puts message
