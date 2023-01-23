import Data.List
import Data.Char
import qualified Data.Map as M
import Geometry

numUniques :: (Eq a) => [a] -> Int
numUniques = length . nub

encode :: Int -> String -> String
encode shift msg = 
  let ords = map ord msg
      shifted = map (+shift) ords
  in map chr shifted

main = do
  print $ numUniques [1,1,2,2,3,3]
  --print (M.filter (\x -> x == 1) [1,2,3]) -- errors?!
  print $ intersperse ',' "Monkey"
  print $ encode 1 "Hey dude"
  print $ cubeArea 3