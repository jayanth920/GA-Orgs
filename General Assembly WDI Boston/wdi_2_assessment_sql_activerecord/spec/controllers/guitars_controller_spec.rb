require 'rails_helper'

RSpec.describe GuitarsController do
  describe "GET index" do

    # In config/routes.rb
    # You'll need to add something to make this work
    it "routes /guitars to guitar#index" do
      expect(get: '/guitars').to route_to(controller: 'guitars', action: 'index')
    end

    # You'll edit controller/guitars_controller.rb
    # to make this one pass
    it 'assigns @guitars to be all guitars from the database' do
      guitar_one = Guitar.create
      guitar_two = Guitar.create
      guitar_three = Guitar.create
      get :index
      expect(assigns(:guitars)).to eq([guitar_one, guitar_two, guitar_three])
    end

    # You shouldn't have to do *anything* to make this spec pass if all
    # of the others are passing
    it 'renders the index template' do
      get :index
      expect(response).to render_template('index')
    end
  end
end
