class CreateReactions < ActiveRecord::Migration[5.0]
  def change
    create_table :reactions do |t|
      t.references :story, foreign_key: true, null: false
      t.integer :kind, default: 0, null: false

      t.timestamps
    end
  end
end
