require 'pg'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry' if development?

helpers do
  # This helps us run SQL commands
  # Make sure to run the guitar.sql first as seen below
  # createdb guitar_development
  # psql -d guitar_development -f guitars.sql
  def run_sql(sql)
    db = PG.connect(dbname: 'guitar_development', host: 'localhost')
    result = db.exec(sql)
    db.close
    result
  end
end

########################
## Guitars Collection ##
########################

# This route shows entire list of guitar
get '/' do
  sql = "SELECT * FROM guitars"
  @guitars = run_sql(sql)
  erb :index
end

get '/guitars/new' do
  erb :new
end

# Shows a single guitar by ID number
get '/guitars/:id' do
  id = params[:id]
  sql = "SELECT * FROM guitars WHERE id=#{id}"
  @guitar = run_sql(sql).first
  erb :show
end

# This route creates a new guitar in the database
# The form for this one is in the GET '/guitars/new' route above
post '/guitars/new' do
  # Pulling in the params from the data posted in the form
  make =  params[:make]
  model = params[:model]
  year =  params[:year]
  color = params[:color]

  sql = "INSERT INTO guitars (make, model, year, color) VALUES ('#{make}', '#{model}', #{year}, '#{color}') RETURNING id"
  new_id = run_sql(sql).first
  redirect to "/guitars/#{new_id["id"]}"
end

get '/guitars/:id/edit' do
  id = params[:id]
  sql = "SELECT * FROM guitars WHERE id=#{id}"
  @guitar = run_sql(sql).first
  erb :edit
end

# This route updates a guitar record
# Form for this is the GET '/guitars/:id/edit above'
post '/guitars/:id/update' do
  # Pulling in the params from the data posted in the form
  id =    params[:id]
  make =  params[:make]
  model = params[:model]
  year =  params[:year]
  color = params[:color]

  sql = "UPDATE guitars SET (make, model, year, color) = ('#{make}', '#{model}', #{year}, '#{color}') WHERE id=#{id}"
  run_sql(sql)
  redirect to "/guitars/#{id}"
end

# This route deletes a guitar record.
# This should probably be a DELETE or POST, but this is simpler for the moment
get '/guitars/:id/delete' do
  id = params[:id]
  sql = "DELETE FROM guitars WHERE id=#{id}"
  run_sql(sql)
  redirect to '/'
end
