require 'bcrypt'
require 'pry'
require_relative './logger'
require_relative './authenticate'

module GA

  class UserError < StandardError; end

  class User
    include Logger

    # mixin the module's methods as class methods
    extend Authenticator

    PWD_FILENAME = "#{File.dirname(__FILE__)}/../passwd"

    attr_accessor :email, :password, :password_confirmation

    def initialize(email, password = "", password_confirmation = "")
      @email = email
      @password = password
      @password_confirmation = password_confirmation
    end

    def encrypt_password
      @password_salt = BCrypt::Engine.generate_salt
      @password_hash = BCrypt::Engine.hash_secret(password, @password_salt)
      true
    end

    def valid?
      true
    end

    def pwd_str
      "#{@email}:#{@password_hash}:#{@password_salt}\n"
    end

    def save!
      raise UserError, ("#{@email} is missing a password hash") if @password_hash.nil?
      raise UserError, "User #{@email} is not valid" unless self.valid?

      log("Save user with email #{email}")

      File.open(PWD_FILENAME, 'a+') do |pwd_file|
        pwd_file.puts(self.pwd_str)
      end
    end

    # class method MUST be called by using the class name.
    # ex: User.find_by_email('joe@gmail.com')

    # Three  Ways to DEFINE a class method

    # 1.
    # def self.find_by_email(email_address)
    # ...
    # end

    # 2.
    # def User.find_by_email(email_address)
    #  ...
    # end

    # 3. Only use this if you are defining lots of class methods.
    # class < self
    #  def find_by_email(email_address)
    #    ...
    #  end

    def self.find_by_email(email_address)
      entries = []
      File.open(PWD_FILENAME, 'r') do |pwd_file|
        #      entries = pwd_file.read_lines
        entries = pwd_file.readlines
      end

      entries.find do |entry|
        email_address == entry.split(':')[0]
      end
    end
  end
end
