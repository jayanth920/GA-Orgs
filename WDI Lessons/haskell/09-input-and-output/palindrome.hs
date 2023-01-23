import Data.Char

main = interact palindrome

palindrome = unlines . map (\xs ->
  if isPalindrome xs then "yep" else "no") . lines
  where isPalindrome xs = spaceless xs == reverse (spaceless xs)
        spaceless = filter isLetter