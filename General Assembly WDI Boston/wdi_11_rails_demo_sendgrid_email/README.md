# Pony + SendGrid Demo

Pony helps us send email without building up messy mailers.

SendGrid is a service that allows us to not need to use our own email accounts to send email from our application.

Together, the two of these are awesome, but require some configuration to get running on Heroku.

We've added the Pony and SendGrid gems. Run `bundle install`

Add the following to your `config/application.rb`

    Pony.options = {
      :via => :smtp,
      :via_options => {
        :address => 'smtp.sendgrid.net',
        :port => '587',
        :domain => 'heroku.com',
        :user_name => ENV['SENDGRID_USERNAME'],
        :password => ENV['SENDGRID_PASSWORD'],
        :authentication => :plain,
        :enable_starttls_auto => true
      }
    }

Add `.env` to your `.gitignore` file.

Run `heroku create` and `heroku addons:add sendgrid`

If you don't already have the heroku-config plugin, run:

    heroku plugins:install git://github.com/ddollar/heroku-config.git

And then run:

    heroku config:pull --overwrite --interactive

You can now send email with:

    Pony.mail(to: "someone@example.com", subject: "Words words words", body: "Bodies")

Try to push your code to Heroku to see it working from there.
