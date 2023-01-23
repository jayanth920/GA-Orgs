system "clear"
class Mathy
  def self.formula_1 (a, b, c)
    a + b  * c
  end

  def self.subtract_and_divide (a, b, c)
    (a - c) / b
  end
  #edit lecture to remove backticks
  def self.powers_of_3 a
    a * a * a 
  end
end

# puts formula_1(1,2,3)
# mathy  = Mathy.new
# p Mathy.formula_1(1,2,3)
p Mathy.powers_of_3(2)
