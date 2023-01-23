require 'spec_helper'

describe "computers/edit" do
  before(:each) do
    @computer = assign(:computer, stub_model(Computer,
      :make => "MyText",
      :model => "MyText",
      :price => "9.99"
    ))
  end

  it "renders the edit computer form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", computer_path(@computer), "post" do
      assert_select "textarea#computer_make[name=?]", "computer[make]"
      assert_select "textarea#computer_model[name=?]", "computer[model]"
      assert_select "input#computer_price[name=?]", "computer[price]"
    end
  end
end
