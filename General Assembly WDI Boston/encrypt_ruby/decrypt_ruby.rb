require 'gibberish'

# Decrypt all the encrypted files in a directory
# Needs a directory name and a password.
# ruby decrypt_ruby.rb  './ga-wdi-boston/ga-ruby-modules/done/' 'password'

if ARGV.length != 2
  puts "Usage: decrypt_ruby.rb  directory_to_decrypt' 'password'"
end

dir = ARGV[0]
password = ARGV[1]

# cd to dir
Dir.chdir(dir)
current_dir = Dir.pwd

# puts "Current dir is #{current_dir}"

# get all the encrypted file names
Dir.glob("./*.enc") do |enc_file_name|
  puts "working on: #{enc_file_name}..."

  # read the contents of the ruby file
  File.open(enc_file_name) do |enc_file|
    contents = enc_file.read
    #puts "Contents = #{contents}"

    # encrypt the contents 
    cipher = Gibberish::AES.new(password)
    decoded_contents = cipher.dec(contents)
    puts "Decoded contents = #{decoded_contents}"


    ruby_file_name = enc_file_name.split('.enc')[0] + ".rb"
    File.open(ruby_file_name, 'w+') do |ruby_file|
      puts "writing ruby contents to #{ruby_file_name}"
      ruby_file.write(decoded_contents)
    end

    File.delete(enc_file_name)

  end

end


