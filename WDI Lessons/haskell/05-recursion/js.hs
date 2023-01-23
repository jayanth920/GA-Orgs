max' :: (Ord a) => [a] -> a
max' [x] = x
max' (x:xs) 
  | x > maxTail = x
  | otherwise = maxTail
  where maxTail = max' xs

replicate' :: (Num n, Ord n) => n -> a -> [a]
replicate' n x
  | n <= 0 = []
  | otherwise = x:replicate' (n-1) x

take' :: (Num i, Ord i) => i -> [a] -> [a]
take' n _
  | n <= 0 = []
take' _ [] = []
take' n (x:xs) = x:take' (n-1) xs

-- how this works for take' 3 [4,3,2,1]
-- take' 3 = [4, VV]
-- take' 2 = [3, VV]
-- take' 1 = [2, VV]
-- take' 0 = []
-- == [4,3,2]

rev' :: [a] -> [a]
rev' [] = []
rev' (x:xs) = rev' xs ++ [x]

cartesianProduct :: (Num a) => [a] -> [a] -> [a]
cartesianProduct _ [] = []
cartesianProduct [] _ = []
cartesianProduct (x:xs) (y:ys) = [x * y] ++ cartesianProduct xs ys

quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
  let smallerSorted = quicksort [a | a <- xs, a <= x]
      biggerSorted = quicksort [a | a <- xs, a > x]
  in smallerSorted ++ [x] ++ biggerSorted

len' :: (Num n) => [a] -> n
len' [] = 0
len' [x] = 1
len' (x:xs) = 1 + len' xs

main = do
  print(max' [1,2,3])
  print(replicate' 3 "a")
  print(take' 2 [1,2,3])
  print(cartesianProduct [1,2] [3,4])
  print(len' [1,2,3,4])
