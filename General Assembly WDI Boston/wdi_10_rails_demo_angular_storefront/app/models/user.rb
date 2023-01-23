class User < ActiveRecord::Base
	has_many :line_items
	has_many :products, through: :line_items
	has_many :orders, through: :line_items

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
