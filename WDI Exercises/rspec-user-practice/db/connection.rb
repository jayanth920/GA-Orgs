require "active_record"

ActiveRecord::Base.establish_connection({
  database: 'rspec_user_db',
  adapter: 'postgresql'
})

# Fix an issue with sinatra and Active Record where connections are left open
if defined? Sinatra
	after do
	  ActiveRecord::Base.connection.close
	end
end
