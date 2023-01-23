class Contact < ActiveRecord::Base
  has_many :notes

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone, presence: true
  validates :birthday, presence: true

  def self.born_on(day)
    # Returns 0-6
    dow = Date::DAYNAMES.index(day.camelize)

    # Similar to writing:
    # SELECT * FROM CONTACTS WHERE EXTRACT(DOW FROM birthday) = dow
    where('EXTRACT(DOW FROM birthday) = ?', dow)
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
