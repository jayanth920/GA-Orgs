require "sinatra"
require "sinatra/reloader"

$instructors = ["Jesse","Adrian","Matt","Adam","Andy"]

get "/" do
  if params[:instructor_name]
    @instructors = []
    $instructors.each do |instructor|
      if instructor.match( params[:instructor_name])
	@instructors << instructor 
      end
    end
  else
    @instructors = $instructors
  end
  erb :index
end

post "/" do
  $instructors << params[:instructor_name]
  redirect "/"
end

