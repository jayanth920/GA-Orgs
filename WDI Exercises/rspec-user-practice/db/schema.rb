require_relative "./connection"

ActiveRecord::Schema.define do
  enable_extension "plpgsql"
  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "name"
    t.string   "email"
    t.string   "password"
    t.string   "github_id"
    t.string   "image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end
end
