require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'json'
require 'rest-client'
require 'dotenv'


Dotenv.load

get '/commits' do
	
  commits = []

  # fetches specified number of pages of commits, each containing 100 commits
  1.times do |i|
    puts i
		commit_page = RestClient.get("https://api.github.com/repos/tcclevela/Git-Layers/commits", {params: {
			client_id: ENV["CLIENT_ID"],
			client_secret: ENV["CLIENT_SECRET"],
			per_page: 100
		}})
		
    # inserts each commit into the comits array
    JSON.parse(commit_page).each do |commit|
			commits << commit
		end

	end

  # returns the commits as json object
	commits.to_json
end