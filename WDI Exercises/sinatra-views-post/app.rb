require 'sinatra'
require 'sinatra/reloader'

names =  ['Ali', 'Mike', 'James']

# route = verb + path

get '/' do
    @names = names
    erb :index
end

get '/names' do # renders the form
  erb :student # this is the form view, student.erb
end

post '/names' do # route for creating data
  names.push(params[:student_name])
  @names = names
  erb :index
end
