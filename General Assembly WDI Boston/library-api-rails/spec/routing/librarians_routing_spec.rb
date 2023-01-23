require "rails_helper"

RSpec.describe LibrariansController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/librarians").to route_to("librarians#index")
    end


    it "routes to #show" do
      expect(:get => "/librarians/1").to route_to("librarians#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/librarians").to route_to("librarians#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/librarians/1").to route_to("librarians#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/librarians/1").to route_to("librarians#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/librarians/1").to route_to("librarians#destroy", :id => "1")
    end

  end
end
