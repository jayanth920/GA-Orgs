a = (not (5 == 3) ) == ( 5 /= 3)

doubleMe x = x + x

add x y = x + y

doubleBigNumber x = if x < 100
  then x
  else x * 2

nums = [4,8,15,15,23,42]
nums2 = [1,2,3]

fizzbuzz limit = 
  [ if x `mod` 15 == 0
    then "fizzbuzz"
    else 
      if x `mod` 3 == 0
      then "fizz"
      else
        if x `mod` 5 == 0
	then "buzz"
	else show x
    | x <- [1..limit]
  ]

-- array functions
-- head
-- tail
-- init
-- last
-- null : checks if empty
-- take 1 [0,1,2] -- => 1
-- drop 1 [0,1,2] -- => [1,2]
-- maximum
-- minimum
-- sum
-- product

main = do
  print a
  print (doubleMe 3)
  print (add 2 3)
  print (doubleBigNumber 200)
  print (doubleBigNumber 20)
  print (nums ++ nums2)
  print ("one" ++ "two")
  print ("one" == ['o','n','e'])
  print (5:[1,2,3,4])
  print (1:2:3:[] == [1,2,3])
  print ([1,2] !! 0)
  print (0 `elem` [0,1]) -- an infix function
  print (sum [1..3])
  print ([x+1 | x <- [1..3]]) -- list comprehension
  print ([x+10 | x <- [1..5], x `mod` 2 == 0])
  print (fizzbuzz 16)
