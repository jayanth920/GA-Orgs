require_relative "../models/user"

get "/favicon.ico" do
end

get "/" do
  @users = User.all
  erb :"users/index"
end

get "/new" do
  @user = User.new
  erb :"users/form"
end

get "/:id" do
  @user = User.find(params[:id])
  erb :"users/show"
end

get "/:id/edit" do
  @user = User.find(params[:id])
  erb :"users/form"
end

post "/" do
  puts "A" * 50
  @user = User.create!(artist_params(params))
  redirect "/#{@user.id}"
end

post "/:id" do
  puts "B" * 50
  @user = User.find(params[:id])
  case params[:method]
  when "delete"
    @user.delete
    redirect "/"
  when "patch"
    @user.update(artist_params(params))
    redirect "/#{@user.id}"
  end
end

private
def artist_params params
  {
    name: params[:name],
    username: params[:username],
    password: params[:password]
  }
end
