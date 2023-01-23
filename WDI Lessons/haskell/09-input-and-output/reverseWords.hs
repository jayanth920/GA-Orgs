--main = do
  --putStrLn "hey, whats your name"
  --name <- getLine
  --putStrLn("Hey " ++ name)

main = do
  line <- getLine
  if null line
    then return ()
    else do
      putStrLn $ reverseWords line
      main

reverseWords :: String -> String
reverseWords = unwords . map reverse . words