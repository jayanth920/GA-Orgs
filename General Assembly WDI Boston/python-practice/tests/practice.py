import unittest

import bin.practice

class TestDiagnostic(unittest.TestCase):
  """Provides test cases for python-practice"""

  def test_question_one(self):
    self.assertEqual(bin.practice.variable, 'favorite_star_wars_movie')

  def test_question_two(self):
    self.assertEqual(bin.practice.flow, 'The Dark Knight')

  def test_question_three(self):
    self.assertEqual(bin.practice.template, 'My name is Steve and I like strawberry pie during the summer.')

  def test_question_four(self):
    self.assertEqual(bin.practice.message, 'Look at that, you CAN run a python script!')

  def test_question_five(self):
    self.assertEqual(bin.practice.else_if, 'elif')

  def test_question_six(self):
    self.assertEqual(bin.practice.triple_quotes, 'docstrings')

  def test_question_seven(self):
    self.assertEqual(bin.practice.remove_from_list, [12, 34])

  def test_question_eight(self):
    self.assertEqual(bin.practice.add_to_list, [12, 34, 99])

  def test_question_nine(self):
    dict = bin.practice.person_dictionary
    self.assertEqual('favorite_number' in dict.keys(), True)
    self.assertEqual('first_name' in dict.keys(), True)

  def test_question_ten(self):
    self.assertEqual(bin.practice.normalize('hello'), 'OLLEH')

if __name__ == '__main__':
    unittest.main()
