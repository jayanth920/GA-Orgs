require 'spec_helper'

describe "headphones/show" do
  before(:each) do
    @headphone = assign(:headphone, stub_model(Headphone,
      :make => "Make",
      :model => "Model",
      :description => "MyText",
      :impedance => 1,
      :price => "9.99"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    expect(rendered).to match(/Make/)
    expect(rendered).to match(/Model/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/1/)
    expect(rendered).to match(/9.99/)
  end
end
