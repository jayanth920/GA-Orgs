RSpec.describe TrueClass do
  it 'is true' do
    expect(true).to be true
  end

  it 'is false when one bang is used' do
    expect(!true).to be false
  end

  it 'is true when two bangs are used' do
    expect(!!true).to be true
  end

  it 'is false when three bangs are used' do
    expect(!!!true).to be false
  end
end

RSpec.describe FalseClass do
  it 'is false' do
    expect(false).to be false
  end

  it 'is true when one bang is used' do
    expect(!false).to be true
  end

  it 'is false when two bangs are used' do
    expect(!!false).to be false
  end

  it 'is true when three bangs are used' do
    expect(!!!false).to be true
  end
end

RSpec.describe 'Things that evaluate to boolean values' do
  it '> returns true or false' do
    expect(1 < 2).to be true
    expect(1.0 < 2.0).to be true

    # Strings evaluate in lexical order
    expect('a' < 'b').to be true
    expect('apple' < 'bagel').to be true
  end

  it '&& requires that both things are true' do
    expect(true && true).to be true
    expect(true && false).to be false
    expect(false && true).to be false
    expect(false && false).to be false

    # Also works for multiple comparisons
    expect((1 < 2) && (3 < 4)). to be true
    expect((1 < 2) && (2 < 1)).to be false
  end

  it '|| (or) requires only one of things to be true' do
    expect(true || true).to be true
    expect(true || false).to be true
    expect(false || true).to be true
    expect(false || false).to be false
  end
end
