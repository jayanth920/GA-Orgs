"""Demos list slice syntax"""

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Returns a full copy of the list
# Starts at index 0 and goes until the end
whole_list = my_list[0:]

# Returns items from my_list starting at index 0 and going up to index 5
# This will not include the item at index 5, so we end up with:
# [1, 2, 3, 4, 5]
slice_first_half = my_list[0:5]

# Returns items from my_list starting at index 5 and going up to index 10
# This will not include the item at index 10 (which doesn't exist), so we end up with:
# [5, 6, 7, 8, 9]
slice_last_half = my_list[5:10]

# Returns every other item in the first half of the list
# Starts at index 0 and goes until the end, counting by 2
# [1, 3, 5]
first_half_by_twos = my_list[0:5:2]

# Returns every other item in the list
# Starts at index 0 and goes until the end, counting by 2
whole_list_by_twos = my_list[0::2]
