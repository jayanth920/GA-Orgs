class CreateGreetings < ActiveRecord::Migration
  def change
    create_table :greetings do |t|
      t.text :email
      t.text :content

      t.timestamps
    end
  end
end
