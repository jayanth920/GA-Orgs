class AddTokenAndExpiresToUsers < ActiveRecord::Migration
  def change
    add_column :users, :youtube_token, :string
    add_column :users, :youtube_token_expires, :integer
  end
end
