class Reaction < ApplicationRecord
  belongs_to :story, required: true, counter_cache: true
  belongs_to :user, required: true

  enum kind: { laugh: 0, cold_sweat: 1 }

  validates :kind, uniqueness: { scope: %i(story_id user_id) }
end
