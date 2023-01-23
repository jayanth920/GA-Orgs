class User < ActiveRecord::Base
  before_save :downcase_username

  def downcase_username
    self.username.downcase!
  end

  def self.named username
    User.find_by(username: username)
  end

  def name
    read_attribute(:name) || self.username
  end

  def first_name
    return self.username.capitalize unless name.present?
    name.split.first.capitalize
  end

  def last_name
    return self.username.capitalize unless name.present?
    name.split.last.capitalize
  end

end
