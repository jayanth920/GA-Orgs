class User < ActiveRecord::Base
  has_many :purchases, dependent: :destroy

  def total_purchases
    purchases.map { |purchase| purchase.price }.reduce(:+)
  end
end
