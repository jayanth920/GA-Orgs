require 'pry'
require 'sinatra'
require 'sinatra/reloader'

# First one of these is "matched"
get '/' do
	"Hello World".reverse
end

get '/hello/:name' do
	params[:name]
end

get '/hello/:name/:age' do
	"Hi, #{params[:name]}, I think you're #{params[:age]}"
end

get '/maths/:x/:y' do
	(params[:x].to_i + params[:y].to_i).to_s
end

get '/say/*/to/*' do
	params[:splat]
end

get '/blogpost.?:json?' do
	if params[:json]
		"REQUESTED JSON"
	else
		"BLAG"
	end
end

get '/ugly' do
  "<!doctype html>
  <html>
  <head><title>NO</title></head><body>
  <h1>Wow, this is goign to be a lot of work to make a web site this way</h1>
  <p>Why would I do this to myself?</p>
  <p>I like this like \"this\"</p></body></html>"
end

get '/time' do
	code = "<h1><%= Time.now %></h1>"
	erb(code)
end

get '/looper' do
	code = "<% 3.times do |x| %> Hi: <%= x %> <% end %>"
	erb code
end
