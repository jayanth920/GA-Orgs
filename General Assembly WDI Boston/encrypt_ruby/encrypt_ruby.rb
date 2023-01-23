require 'gibberish'

# Encrypt all the ruby file in a directory
# Needs a directory name and a password.
# ruby encrypt_ruby.rb  './ga-wdi-boston/ga-ruby-modules/done/' 'password'

if ARGV.length != 2
  puts "Usage: encrypt_ruby.rb  directory_to_encrypt' 'password'"
end

dir = ARGV[0]
password = ARGV[1]

# cd to dir
Dir.chdir(dir)
current_dir = Dir.pwd

# puts "Current dir is #{current_dir}"

# create tar of ruby files, just in case.
# DON'T CHECK THIS IN!!
%x{ tar cvfz ruby_files.tar.gz .}
puts "Create an archive of the ruby source files in ruby_files.tar.gz"
puts "REMOVE THIS BEFORE CHECK IN TO GIT!!!"

# get all the ruby file names
Dir.glob("./*.rb") do |ruby_file_name|
  puts "working on: #{ruby_file_name}..."

  # read the contents of the ruby file
  File.open(ruby_file_name) do |ruby_file|
    contents = ruby_file.read
    #puts "Contents = #{contents}"

    # encrypt the contents 
    cipher = Gibberish::AES.new(password)
    encoded_contents = cipher.enc(contents)
    puts "Encoded contents = #{encoded_contents}"

    encrypted_file_name = ruby_file_name.split('.rb')[0] + ".enc"
    File.open(encrypted_file_name, 'w+') do |encrypted_file|
      puts "writing encrypted contents to #{encrypted_file_name}"
      encrypted_file.write(encoded_contents)
    end

    File.delete(ruby_file_name)
    #FileUtils.rm(ruby_file_name)

    # decoded_contents = cipher.dec(encoded_contents)
    # puts "Decoded contents = #{decoded_contents}"
  end

end


