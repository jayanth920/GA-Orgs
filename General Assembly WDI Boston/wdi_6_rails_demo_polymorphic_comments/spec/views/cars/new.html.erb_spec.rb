require 'spec_helper'

describe "cars/new" do
  before(:each) do
    assign(:car, stub_model(Car,
      :make => "MyText",
      :model => "MyText",
      :year => 1,
      :price => "9.99",
      :color => "MyText"
    ).as_new_record)
  end

  it "renders new car form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", cars_path, "post" do
      assert_select "textarea#car_make[name=?]", "car[make]"
      assert_select "textarea#car_model[name=?]", "car[model]"
      assert_select "input#car_year[name=?]", "car[year]"
      assert_select "input#car_price[name=?]", "car[price]"
      assert_select "textarea#car_color[name=?]", "car[color]"
    end
  end
end
