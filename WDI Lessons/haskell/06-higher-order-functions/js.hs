compareWithTen :: (Num a,Ord a) => a -> Ordering
compareWithTen = compare 10

halve :: (Floating a) => a -> a
halve = (/2)

zipw :: (a->b->c) -> [a] -> [b] -> [c]
zipw _ [] _ = []
zipw _ _ [] = []
zipw f (x:xs) (y:ys) = f x y : zipw f xs ys

cartesianProduct :: (Num a) => [a] -> [a] -> [a]
cartesianProduct = zipw (*)

main = do
  print(compareWithTen 3)
  print(halve 4)
  print(cartesianProduct [1,2] [3,4])
  print( map (\x -> x * 2) [1,2,3])
  print( sum $ map sqrt [1,2,3])
  print( sum ( map sqrt [1,2,3] ))
  print( map (negate . abs) [1,-2,3]) -- function composition
  print( map (\x -> negate $ abs x ) [1,-2,3])