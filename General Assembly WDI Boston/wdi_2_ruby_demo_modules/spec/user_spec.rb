require_relative './spec_helper'
require_relative '../lib/user'

describe GA::User do
  after(:each) do
    rm_passwd_file
  end

  let(:email) {'tom@example.com'}
  let(:password) {'password'}
  let(:password_confirmation) {'password'}

  it "#initialize" do
    u = GA::User.new(email, password, password_confirmation)
    expect(u.email).to eq email
    expect(u.password).to eq password
    expect(u.password_confirmation).to eq password_confirmation
  end

  subject() {GA::User.new(email, password, password_confirmation)}

  it "#encrypt_password" do
    expect(subject.encrypt_password).to be_true
  end

  describe "without a password hash" do
    it "save!" do
      expect {subject.save!}.to raise_error GA::UserError
    end
  end

  describe "with a password hash" do
    before(:each) do
      subject.encrypt_password
    end
    it "#pwd_str" do
      email, hash, salt = subject.pwd_str.split(':')
      expect(email).to eq subject.email

    end

    it "should generate unique salt and password hash" do
      # hash and salt should be different each time
      salts = []
      hashes = []
      5.times do |i|
        user = GA::User.new(email, password, password_confirmation)
        user.encrypt_password
        _, hashes[i], salts[i] =  user.pwd_str.split(':')
      end

      expect(hashes.uniq.length).to eq 5
      expect(salts.uniq.length).to eq 5
    end

    it "save!" do
      expect {subject.save!}.not_to raise_error
    end
  end


  describe "saved to the pwd file" do
    before(:each) do
      @user_hash = {}
     %w{tom jill ed dave}.each do |name|
        @user_hash[name] = GA::User.new("#{name}@example.com", "pw_#{name}", "pw_#{name}")
        @user_hash[name].encrypt_password
        @user_hash[name].save!
      end
    end

    it '#find_by_email' do
      tom = GA::User.find_by_email('tom@example.com')
      expect(tom).to eq @user_hash['tom'].pwd_str
    end
  end
end

def rm_passwd_file
  File.delete(GA::User::PWD_FILENAME) if File.exist?(GA::User::PWD_FILENAME)
end
