class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.text :body, null: false

      t.timestamps
    end
  end
end
