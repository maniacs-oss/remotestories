class AddCounterCacheColumnsToStories < ActiveRecord::Migration[5.0]
  def change
    add_column :stories, :comments_count, :integer, null: false, default: 0
    add_column :stories, :reactions_count, :integer, null: false, default: 0
  end
end
