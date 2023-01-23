data Person = Person String String deriving (Show)

--firstName :: Person -> String
--firstName (Person f _) = f

data Human = Human {
  firstName :: String,
  lastName :: String
} deriving (Show)

--dude = Person "Jesse" "Shawl"
--dude = Human "Jesse" "Shawl"
dude = Human {firstName="Jesse", lastName="Shawl"}

data Vector a = Vector a a a deriving (Show)
-- ^^ type const. ^^ value constructor.

vplus :: (Num t) => Vector t -> Vector t -> Vector t
(Vector i j k) `vplus` (Vector l m n) = Vector (i+l) (j+m) (k+n)

v = Vector 3 3 3

main = do
  print $ firstName dude
  print $ v `vplus` v
