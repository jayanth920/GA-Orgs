class WelcomeController < ApplicationController
  # Methods in our controller, are called 'actions'
  # if they have coorosponding routes
  def show
    @colors = ["Red", "Green", "Blue"]
    @random_number = rand 0..20
    # render show.html.erb
  end
end
