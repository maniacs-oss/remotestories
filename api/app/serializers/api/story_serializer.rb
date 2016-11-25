class Api::StorySerializer < ActiveModel::Serializer
  has_one :story
  has_many :comments
  has_many :reactions
end
