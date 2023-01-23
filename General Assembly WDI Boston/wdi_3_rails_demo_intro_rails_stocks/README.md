# First Rails Project

- Created a new Rails project: `rails new FirstApp --database=postgresql`
- Created new database with `rake db:create`
- Added a route to config/routes.rb of `get 'welcome' => 'welcome#show'`
- View routes in terminal with `rake routes`
- Created a new controller and associated files with a rails *generator* : `bin/rails generate controller welcome`
- Create a controller *action* called `show` in `app/controller/welcome_controller.rb`
- Created a view template in `app/views/welcome/show.html.erb`
- Ran the Rails server by running `rails server` from the bash prompt, which we can close with CTRL-C
- View page in Chrome at `http://localhost:3000/welcome`
