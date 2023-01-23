tail' :: [z] -> z
tail' [z] = z
tail' (_:zs) = tail' zs

length' :: (Num n) => [a] -> n
length' [] = 0
length' (_:xs) = 1 + length' xs

sum' :: (Num n) => [n] -> n
sum' [] = 0
sum' (x:xs) = x + sum' xs

firstLetter :: String -> String
firstLetter word@(x:xs) = "First letter of " ++ word ++ " is " ++ [x]
-- ^^ as pattern. Why does [x] have to be in array?

doBounce :: (Ord a, Num a) => a -> String
doBounce age
  | age <= 19 = "Go find some apple juice"
  | age == 20 = "Come back next year"
  | otherwise = "Come on in!"

min' :: (Ord n) => n -> n -> n
min' a b
  | a < b = a
  | otherwise = b

-- doBounce' :: (Ord a, Num a) => a -> String
-- doBounce' birthyear
--   | 2015 - birthyear <= 19 = "Go find some apple juice"
--   | 2015 - birthyear == 20 = "Come back next year"
--   | otherwise = "Come on in!"

doBounce' :: (Ord a, Num a) => a -> String
doBounce' birthyear
  | age<= 19 = "Go find some apple juice"
  | age == 20 = "Come back next year"
  | otherwise = "Come on in!"
  where age = 2015 - birthyear

-- domain' :: (Ord n) => n -> n -> [n,n]

initials :: String -> String -> String
initials first last = [f] ++ ". " ++ [l] ++ "."
  where (f:_) = first
        (l:_) = last

main = do
  print(tail' "DAWG")
  print(length' "DAWG")
  print(sum' [1,2,3])
  print(firstLetter "DAWG")
  print(doBounce' 1989)
  print(min' 3 2)
  print(initials "Jesse" "Shawl")
  print( let(a,b) = (1,2) in a+b ) -- same let as in ghci?
  print( fizzbuzz 4)
  -- in is implied in ghci