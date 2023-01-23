# frozen_string_literal: true
class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string  :content, null: false
      t.boolean :done,    null: false, default: false

      t.timestamps null: false
    end
  end
end
