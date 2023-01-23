require 'spec_helper'

describe "amplifiers/edit" do
  before(:each) do
    @amplifier = assign(:amplifier, stub_model(Amplifier,
      :make => "MyString",
      :model => "MyString",
      :price => "9.99",
      :max_power => 1,
      :impedance => 1,
      :height => 1,
      :weight => 1
    ))
  end

  it "renders the edit amplifier form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", amplifier_path(@amplifier), "post" do
      assert_select "input#amplifier_make[name=?]", "amplifier[make]"
      assert_select "input#amplifier_model[name=?]", "amplifier[model]"
      assert_select "input#amplifier_price[name=?]", "amplifier[price]"
      assert_select "input#amplifier_max_power[name=?]", "amplifier[max_power]"
      assert_select "input#amplifier_impedance[name=?]", "amplifier[impedance]"
      assert_select "input#amplifier_height[name=?]", "amplifier[height]"
      assert_select "input#amplifier_weight[name=?]", "amplifier[weight]"
    end
  end
end
