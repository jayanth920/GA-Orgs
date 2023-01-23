class User < ActiveRecord::Base
	has_many :tweets
	has_many :favorites
	
	has_many :followings
	has_many :friends, through: :followings, source: 'followed'

	attr_accessible :name, :screenname, :description, :email,
					:location, :password

	validates :screenname, presence: true
end