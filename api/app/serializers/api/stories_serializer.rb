class Api::StoriesSerializer < ActiveModel::Serializer
  has_many :reactions
  has_many :stories, serializer: ::StorySerializer
  has_one :meta
end
