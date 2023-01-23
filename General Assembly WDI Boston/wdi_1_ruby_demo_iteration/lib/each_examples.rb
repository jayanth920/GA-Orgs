def double_elements_with_each(collection)
  temp_array = []

  collection.each do |number|
    temp_array << number * 2
  end

  temp_array
end


def reverse_elements(collection)
  temp_array = []
  collection.each do |element|
    temp_array << element.reverse
  end
  temp_array
end
