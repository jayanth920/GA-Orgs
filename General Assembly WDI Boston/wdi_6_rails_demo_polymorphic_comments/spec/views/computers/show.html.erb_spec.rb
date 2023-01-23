require 'spec_helper'

describe "computers/show" do
  before(:each) do
    @computer = assign(:computer, stub_model(Computer,
      :make => "MyText",
      :model => "MyText",
      :price => "9.99"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/9.99/)
  end
end
