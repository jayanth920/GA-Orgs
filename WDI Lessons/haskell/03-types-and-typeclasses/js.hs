removeNonUppers :: [Char] -> [Char]
removeNonUppers st = [ c | c <- st, c `elem` ['A'..'Z']]

main = do
  print (removeNonUppers "JeSsE")

-- having trouble thinking of an exercise to demonstrate / practice
-- Instead, here are some Haskell types

-- Int
  -- Used for whole numbers
-- Integer
  -- Used for really big whole numbers
-- Float
  -- Numbers w/ 6 decimal precision
-- Double
  -- Like a float, but double the precision
-- Bool
  -- True and/or False
-- Char
  -- repsresent a character.
  -- I think "word" is [Char] (an array of chars)

-- And typeclasses (like protocol in Swift I think):

-- Eq
  -- Types that support equality testin
-- Ord
  -- Types that have an ordering
-- Show
  -- Types that can be presented as strings
-- Read
  -- Strings that can be presented as their type
-- Enum
  -- Types that are sequentially ordered.
-- Bounded
  -- Types with an upper and lower bound. Includes tuples.
  
-- =>
-- Everything before => is called a class constraint.
-- ghci> :t (==)  
-- (==) :: (Eq a) => a -> a -> Bool  
  -- whatever type `a` is, it must be a memer of Eq typeclass.