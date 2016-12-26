class Comment < ApplicationRecord
  belongs_to :story, required: true, counter_cache: true
  belongs_to :user, required: true

  validates :body, presence: true

  scope :by_date, -> { order(arel_table[:created_at].asc) }
end
