import System.IO

main = do
  f <- openFile "girlfriend.txt" ReadMode
  contents <- hGetContents f
  putStr contents
  hClose f