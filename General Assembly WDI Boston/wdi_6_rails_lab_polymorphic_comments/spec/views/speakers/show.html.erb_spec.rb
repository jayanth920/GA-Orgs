require 'spec_helper'

describe "speakers/show" do
  before(:each) do
    @speaker = assign(:speaker, stub_model(Speaker,
      :make => "Make",
      :model => "Model",
      :price => "9.99",
      :max_power => 1,
      :input_impedance => 2,
      :height => 3,
      :weight => 4
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    expect(rendered).to match(/Make/)
    expect(rendered).to match(/Model/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/1/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
  end
end
