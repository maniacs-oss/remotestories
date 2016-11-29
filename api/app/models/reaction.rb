class Reaction < ApplicationRecord
  belongs_to :story, required: true

  enum kind: { laugh: 0, cold_sweat: 1 }
end
