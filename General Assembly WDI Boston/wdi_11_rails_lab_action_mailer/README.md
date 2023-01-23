# Sending Email with Rails

## Creating a Contact Form

(when a visitor wants to send an email to you, the app owner)

### Demo

rails g scaffold Greeting email:text content:text

# config/routes.rb
root to: 'greeting#index'

# config/environment.rb
ActionMailer::Base.smtp_settings = {
  :user_name => 'your_email@gmail.com',
  :password => 'your_password',
  :domain => 'whatever_or_your_actual_domain',
  :address => 'smtp.gmail.com',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}

Note: best practice here is to store the email and password into environmental variables in a .env file that you create in the Rails root directory - the above is just the quick and dirty way

touch app/mailers/notifier.rb
touch app/views/notifier/greeting_notification.text.erb

(shortcut: rails g mailer Notifier)

# app/mailers/notifier.rb
class Notifier < ActionMailer::Base
  def greeting_notification(form_input)
    mail(to: "someone@gmail.com", from: form_input.email, subject: "New message from #{form_input.email}")
  end
end

# app/views/notifier/greeting_notification.text.erb
Message from <%= @greeting.email %>
<%= @greeting.content %>

# app/models/greeting.rb
after_commit :send_notification
def send_notification
  Notifier.greeting_notification(self).deliver
end


### Lab

Make your own contact form, similar to the one above. It should have all of the fields below, and they should all be used in the email that is sent.

* Visitor Name
* Visitor Email
* Subject
* Content

Bonus: research SendGrid. What is it, and why should we use it instead of Gmail?



