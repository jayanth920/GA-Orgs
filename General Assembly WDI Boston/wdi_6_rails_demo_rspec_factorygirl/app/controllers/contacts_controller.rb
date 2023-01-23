class ContactsController < ApplicationController
  def index
    @contacts = current_user.contacts.order(:last_name)
  end
end
