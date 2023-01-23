class Book < ActiveRecord::Base
  attr_accessible :author, :price, :title, :year, :image
  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates :image, attachment_presence: true
  validates_with AttachmentPresenceValidator, attributes: :image
end
