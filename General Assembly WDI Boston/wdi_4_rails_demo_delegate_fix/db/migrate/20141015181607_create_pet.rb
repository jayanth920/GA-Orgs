class CreatePet < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name
      t.belongs_to :user, index: true
    end
  end
end
