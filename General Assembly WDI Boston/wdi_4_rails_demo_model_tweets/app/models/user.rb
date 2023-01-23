# Class name is singular
# Tables names are plural (in the migrations, schema)
class User < ActiveRecord::Base
  has_many :tweets

# This is a callback.
# It calls the method named grab_recent_tweets after the User is created
  after_create :grab_recent_tweets



  # Attributes are available because they are in the schema
  # not because we define them here

  validates_presence_of :first_name, :last_name

  # Intentionally commented out and invalid examples
  # validates_acceptance_of :terms_of_service
  # validates_confirmation_of :password, :repeated_password
  # validates_format_of :phone_number, regex
  # validates_numericality_of :price
  # validates_presence_of :first_name
  # validates_uniqueness_of :username

# My custom getter
def gender
  self[:gender] || 'Not specified'
end


  attr_accessible :email, :first_name, :last_name
  # This allows only the above to be assigned with mass parameters like
  # User.new(params)
  # To otherwise update them, you must use the assignment operator like
  # User.first.is_admin = true

  private
  def grab_recent_tweets
    # Code to ask Twitter for tweets
  end
end
