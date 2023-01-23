require 'pg'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry' if development?
require 'sinatra/activerecord'
require 'pry'

set :database, {adapter: 'postgresql',
                database: 'guitar_development_new',
                host: 'localhost'}

# Guitar model
class Guitar < ActiveRecord::Base
  validates :model, presence: true
  # year, make, model, color
end

