require 'spec_helper'

describe "speakers/new" do
  before(:each) do
    assign(:speaker, stub_model(Speaker,
      :make => "MyString",
      :model => "MyString",
      :price => "9.99",
      :max_power => 1,
      :input_impedance => 1,
      :height => 1,
      :weight => 1
    ).as_new_record)
  end

  it "renders new speaker form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", speakers_path, "post" do
      assert_select "input#speaker_make[name=?]", "speaker[make]"
      assert_select "input#speaker_model[name=?]", "speaker[model]"
      assert_select "input#speaker_price[name=?]", "speaker[price]"
      assert_select "input#speaker_max_power[name=?]", "speaker[max_power]"
      assert_select "input#speaker_input_impedance[name=?]", "speaker[input_impedance]"
      assert_select "input#speaker_height[name=?]", "speaker[height]"
      assert_select "input#speaker_weight[name=?]", "speaker[weight]"
    end
  end
end
