class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :password_digest, null: false

      t.timestamps
    end

    add_reference :stories, :user, foreign_key: true, null: false
    add_reference :comments, :user, foreign_key: true, null: false
    add_reference :reactions, :user, foreign_key: true, null: false
    add_index :reactions, [:kind, :story_id, :user_id], unique: true
  end
end
