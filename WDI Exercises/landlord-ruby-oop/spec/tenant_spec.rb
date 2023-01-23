require_relative "../models/tenant"

describe Tenant do
  before(:all) do
   @tenant = Tenant.new("Jesse", 26, "Male")
  end
  it "has a name" do
    expect(@tenant.name).to eq("Jesse")
  end
  it "has an age" do
    expect(@tenant.age).to eq(26)
  end
  it "has a gender" do
    expect(@tenant.gender).to eq("Male")
  end
end
