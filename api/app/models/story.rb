class Story < ApplicationRecord
  belongs_to :user, required: true
  has_many :comments, dependent: :destroy
  has_many :reactions, dependent: :destroy

  validates :body, presence: true

  scope :by_date, -> { order(arel_table[:created_at].desc) }
  scope :popular, -> { order('reactions_count + comments_count DESC') }
  scope :with_preloads, -> { preload preload_attributes }

  class << self
    def preload_attributes
      [:comments, :reactions]
    end
  end
end
