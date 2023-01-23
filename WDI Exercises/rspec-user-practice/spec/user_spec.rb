require "rspec"
require_relative "../db/connection"
require_relative "../models/user"

RSpec.describe User do
  describe "names" do
    it "#name returns name when set"
    it "#name returns username when no name is set"
    context "with two words in the name" do
      it "#first_name returns the first word in the name"
      it "#last_name returns the last word in the name"
    end
    context "with 3+ words in the name" do
      it "#first_name returns the first word in the name"
      it "#last_name returns the last word in the name name"
    end
    context "with improper capitalization" do
      it "#first_name returns the first word in the name"
      it "#last_name returns the last word in the name name"
    end
    context "with no name" do
      it "#first_name returns username"
      it "#last_name returns username"
    end
  end
end
