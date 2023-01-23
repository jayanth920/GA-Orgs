require_relative '../anagram'

describe "#find_anagrams" do
  it "doesn't return any for no matches" do
    expect(find_anagrams("bing", %w(enlists google inlets banana))).to eq([])
  end

  it "returns one match" do
    expect(find_anagrams("listen", %w(enlists google inlets banana))).to eq(["inlets"])
  end

    it "returns multiple matches" do
    expect(find_anagrams("listen", %w(enlists google inlets banana enlist))).to include("enlist")
    expect(find_anagrams("listen", %w(enlists google inlets banana enlist))).to include("inlets")
  end
end
