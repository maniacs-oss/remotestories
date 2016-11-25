class Story < ApplicationRecord
  validates :body, presence: true

  scope :by_date, -> { order(arel_table[:created_at].desc) }
  scope :popular, -> { all }
end
