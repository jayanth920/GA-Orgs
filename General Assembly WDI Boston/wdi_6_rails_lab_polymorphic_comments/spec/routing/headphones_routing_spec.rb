require "spec_helper"

describe HeadphonesController do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/headphones").to route_to("headphones#index")
    end

    it "routes to #new" do
      expect(:get => "/headphones/new").to route_to("headphones#new")
    end

    it "routes to #show" do
      expect(:get => "/headphones/1").to route_to("headphones#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/headphones/1/edit").to route_to("headphones#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/headphones").to route_to("headphones#create")
    end

    it "routes to #update" do
      expect(:put => "/headphones/1").to route_to("headphones#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/headphones/1").to route_to("headphones#destroy", :id => "1")
    end

  end
end
