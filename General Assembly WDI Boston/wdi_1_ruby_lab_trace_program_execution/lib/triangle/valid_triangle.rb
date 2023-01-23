# Returns true/false if a triangle is valid
# as per the Triangle Inequality Theorem
def valid_triangle?(side_a, side_b, side_c)
  (side_a + side_b) > side_c &&
  (side_b + side_c) > side_a &&
  (side_a + side_c) > side_b
end
