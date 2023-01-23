require 'pg'
require 'active_record'
require 'pry'

ActiveRecord::Base.logger = Logger.new(STDOUT)

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  host: 'localhost',
  database: 'tags_db'
)

class User < ActiveRecord::Base
end 

class Post < ActiveRecord::Base
end

class Tag < ActiveRecord::Base
end

class Tagging < ActiveRecord::Base
end
