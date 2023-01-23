require 'dictionary'

class WordsController < ApplicationController
	def index
	end

	def complete
		respond_to do |format|
			# Get all suggestions from the dictionary here!
      format.json {render json: suggestions}
    end
	end
end
