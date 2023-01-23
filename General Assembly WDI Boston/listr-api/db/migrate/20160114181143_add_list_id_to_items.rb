# frozen_string_literal: true
class AddListIdToItems < ActiveRecord::Migration[5.1]
  def change
    add_reference :items, :list, index: true, foreign_key: true
  end
end
