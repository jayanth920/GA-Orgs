require_relative "../models/apartment"
require_relative "../models/tenant"

describe Apartment do
  before(:all) do
   @tenant = Tenant.new("Jesse", 26, "Male")
   @apartment = Apartment.new("123 Main St", "$600", 2400, 3, 2, [@tenant])
  end
  it "has an address" do
    expect(@apartment.address).to eq("123 Main St")
  end
  it "has a monthly rent" do
    expect(@apartment.monthly_rent).to eq("$600")
  end
  it "has total square feet" do
    expect(@apartment.sqft).to eq(2400)
  end
  it "has total number of beds" do
    expect(@apartment.num_beds).to eq(3)
  end
  it "has total number of baths" do
    expect(@apartment.num_baths).to eq(2)
  end
  it "has renters" do
    expect(@apartment.renters[0].class).to eq(Tenant)
  end
  it "can add tenants" do
    @apartment.add_tenant(@tenant)
    expect(@apartment.renters.length).to eq(2)
  end
  it "can only have as many tenants as beds" do
    @apartment.add_tenant(@tenant)
    @apartment.add_tenant(@tenant)
    @apartment.add_tenant(@tenant)
    expect(@apartment.renters.length).to eq(3)
  end
end