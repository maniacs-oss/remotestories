class Story < ApplicationRecord
  has_many :comments

  validates :body, presence: true

  scope :by_date, -> { order(arel_table[:created_at].desc) }
  scope :popular, -> { all }
  scope :with_preloads, -> { preload preload_attributes }

  class << self
    def preload_attributes
      [:comments]
    end
  end
end
