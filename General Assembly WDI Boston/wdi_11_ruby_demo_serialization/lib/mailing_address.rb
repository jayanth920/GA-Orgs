class MailingAddress
  attr_reader :street, :city, :state, :zipcode

  def initialize(street, city, state, zipcode)
    @street = street
    @city = city
    @state = state
    @zipcode = zipcode
  end

  def to_s
    "Mailing Address:\n" << ["\tstreet: #{self.street}",
                             "city: #{self.city}",
                             "state: #{self.state}",
                             "zipcode: #{self.zipcode}"
                             ].join("\n\t")
  end
end
