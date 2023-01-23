require 'spec_helper'

describe "headphones/index" do
  before(:each) do
    assign(:headphones, [
      stub_model(Headphone,
        :make => "Make",
        :model => "Model",
        :description => "MyText",
        :impedance => 1,
        :price => "9.99"
      ),
      stub_model(Headphone,
        :make => "Make",
        :model => "Model",
        :description => "MyText",
        :impedance => 1,
        :price => "9.99"
      )
    ])
  end

  it "renders a list of headphones" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Make".to_s, :count => 2
    assert_select "tr>td", :text => "Model".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
  end
end
