require "spec_helper"

describe AmplifiersController do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/amplifiers").to route_to("amplifiers#index")
    end

    it "routes to #new" do
      expect(:get => "/amplifiers/new").to route_to("amplifiers#new")
    end

    it "routes to #show" do
      expect(:get => "/amplifiers/1").to route_to("amplifiers#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/amplifiers/1/edit").to route_to("amplifiers#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/amplifiers").to route_to("amplifiers#create")
    end

    it "routes to #update" do
      expect(:put => "/amplifiers/1").to route_to("amplifiers#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/amplifiers/1").to route_to("amplifiers#destroy", :id => "1")
    end

  end
end
