
def to_roman(num)
  legend = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1].zip(
    %w('M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'))
  ######  legend == [[1000, 'M'], [900, 'CM'], [500, 'D'], ...]
  # Your Code Here
end

def to_arabic(numeral_string)
  legend = %w('M', 'D', 'C', 'L', 'X', 'V', 'I').zip(
    [1000, 500, 100, 50, 10, 5, 4, 1])
  ######  legend = [['M', 1000], ['CM', 900], ['D', 500], ...]
  legend_hash = Hash[legend]
  ######  legend_hash = {'M' => 1000, 'CM' => 900, ...}
  # Your Code Here
end
