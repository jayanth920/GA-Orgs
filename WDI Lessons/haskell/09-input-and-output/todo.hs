import System.IO
import System.Directory
import Data.List

main = do
  f <- openFile "todo.txt" ReadMode
  (tmpName, tmpHandle) <- openTempFile "." "temp"
  contents <- hGetContents f
  let tasks = lines contents
      numberedTasks = zipWith (\n line -> show n ++ " - " ++ line) [0..] tasks
  putStrLn "Todos:"
  putStr $ unlines numberedTasks
  putStrLn "Which one do you want to delete"
  numberString <- getLine
  let number = read numberString
      newTodoItems = delete (tasks !! number) tasks
  hPutStr tmpHandle $ unlines newTodoItems
  hClose f
  hClose tmpHandle
  removeFile "todo.txt"
  renameFile tmpName "todo.txt"