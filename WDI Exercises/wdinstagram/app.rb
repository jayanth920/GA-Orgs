require "bundler/setup"

require "sinatra"
require "sinatra/reloader"
require "pry"

require_relative "db/connection"
require_relative "models/entry"
require_relative "controllers/entries"
