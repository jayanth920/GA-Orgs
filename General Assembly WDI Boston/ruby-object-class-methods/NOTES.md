## Diagram for `#initialize` and `::new`

![.new diagram](https://media.git.generalassemb.ly/user/4584/files/d7c18894-2649-11e7-91f7-e9ca59b08d52)

## Handling the casecmp linter suggestion

While comparing strings to do the search method the linter may suggest using casecmp instead of just comparing the strings with double equals. If a developer asks about this here's a method you can include to avoid that because it will screw up the partial match solution.

```ruby
def self.case_include?(str1, str2)
   str1.upcase.include? str2.upcase
end


def self.search(title)
  TRACKS.find {|song| case_include? song.title, title }
end
```
