require 'spec_helper'

describe "headphones/edit" do
  before(:each) do
    @headphone = assign(:headphone, stub_model(Headphone,
      :make => "MyString",
      :model => "MyString",
      :description => "MyText",
      :impedance => 1,
      :price => "9.99"
    ))
  end

  it "renders the edit headphone form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", headphone_path(@headphone), "post" do
      assert_select "input#headphone_make[name=?]", "headphone[make]"
      assert_select "input#headphone_model[name=?]", "headphone[model]"
      assert_select "textarea#headphone_description[name=?]", "headphone[description]"
      assert_select "input#headphone_impedance[name=?]", "headphone[impedance]"
      assert_select "input#headphone_price[name=?]", "headphone[price]"
    end
  end
end
