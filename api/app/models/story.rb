class Story < ApplicationRecord
  scope :by_date, -> { order(arel_table[:created_at].desc) }
end
