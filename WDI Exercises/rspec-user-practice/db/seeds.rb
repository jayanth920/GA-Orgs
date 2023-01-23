require_relative "./connection"
require_relative "../models/user"

User.destroy_all
User.create(username: "bobdole", name: "Bob Dole", password: "secure123")
