require 'fileutils'

%w{ controllers directives filters services}.each do |dirname|
  main = "./app/assets/javascripts/#{dirname}/main"
  puts "Creating directory: #{main}"
  FileUtils.mkdir_p main
  FileUtils.touch "#{main}/.gitignore"
#  FileUtils.mkdir_p "./app/assests/javascripts/#{dirname}/global"
#  FileUtils.touch "./app/assets/javascripts/#{dirname}/global/.gitignore"
  
#   FileUtils.mkdir_p "#{Rails.root}/#{dirname}/main"
#   FileUtils.touch "#{Rails.root}/#{dirname}/main/.gitignore"
#   FileUtils.mkdir_p "#{Rails.root}/#{dirname}/global"
#   FileUtils.touch "#{Rails.root}/#{dirname}/global/.gitignore"
end
